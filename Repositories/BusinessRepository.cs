using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using time.Models;

namespace time.Repositories
{
    public class BusinessRepository
    {
        IDbConnection _db;

        public Business Register(BusinessRegistration busnReg)
        {
            string id = Guid.NewGuid().ToString();
            int businessAdded = _db.Execute(@"INSERT INTO businesses
                (id, name, pin, lat, lng, managerId)
                VALUES (@id, @name, @pin, @lat, @lng, @managerId);", new
            {
                id,
                name = busnReg.Name,
                lat = busnReg.Lat,
                lng = busnReg.Lng,
                pin = busnReg.Pin,
                managerId = busnReg.ManagerId
            });
            if (businessAdded != 1) return null;
            _db.Execute(@"UPDATE users SET isManager = 1 WHERE id = @ManagerId", busnReg);
            return new Business() {
                Id = id,
                Name = busnReg.Name,
                Lat = busnReg.Lat,
                Lng = busnReg.Lng,
                Pin = busnReg.Pin,
                ManagerId = busnReg.ManagerId
            };
        }

        public Business GetBusinessByManager(string managerId)
        {
            return _db.Query<Business>(@"SELECT * FROM businesses
                WHERE managerId = @managerId", new { managerId }).FirstOrDefault();
        }

        public Business GetBusinessByEmployee(string employeeId)
        {
            Business business = _db.Query<Business>(@"SELECT * FROM businessEmployees be
                INNER JOIN businesses b ON b.id = be.businessId
                WHERE employeeId = @employeeId;", new { employeeId }).FirstOrDefault();
            if (business != null) {
                business.Pin = null;
            }
            return business;
        }

        public Business AddEmployeeToBusiness(EmployeeRegisterToBusiness empRegToBusn)
        {
            Business business = _db.Query<Business>(@"SELECT id FROM businesses
                WHERE pin = @Pin", empRegToBusn).FirstOrDefault();
            if (business == null) return null;
            int success = _db.Execute(@"INSERT INTO businessEmployees
                (employeeId, businessId)
                VALUES (@employeeId, @businessId);", new
            {
                employeeId = empRegToBusn.UserId,
                businessId = business.Id
            });
            if (success != 1) return null;
            business.Pin = null;
            return business;
        }

        internal IEnumerable<User> GetEmployeesByBusinessId(string businessId)
        {
            var users = _db.Query<User>(@"SELECT * FROM businessEmployees be
                INNER JOIN users ON users.id = be.employeeId
                WHERE businessId = @businessId;", new { businessId });
            foreach (User user in users)
            {
                user.Hash = null;
            }
            return users;
        }

        internal UserTime CreateClockIn(UserTime time)
        {
            int id = _db.ExecuteScalar<int>(@"INSERT INTO employeeTimes 
                (employeeId, businessId, clockIn, clockOut)
                VALUES (@EmployeeId, @BusinessId, @ClockIn, @ClockOut);
                SELECT LAST_INSERT_ID();", time);
            time.Id = id;
            return time;
        }

        internal bool CreateClockOut(UserTime time)
        {
            int success = _db.Execute(@"UPDATE employeeTimes 
                SET clockOut = @ClockOut
                WHERE id = @Id;", time);
            return success == 1;
        }

        internal IEnumerable<UserTime> GetAllTimesForEmployee(string employeeId)
        //WILL NEED TO REFACTOR IF WANT TO INCLUDE OPTION FOR RETRIEVING ONLY DATA FOR SPECIFIC COMPANY
        {
            return _db.Query<UserTime>(@"SELECT * FROM employeeTimes
                WHERE employeeId = @employeeId;", new { employeeId });
        }

        public BusinessRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}