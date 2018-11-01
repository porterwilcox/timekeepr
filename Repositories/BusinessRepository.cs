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
            Business busn = _db.ExecuteScalar<Business>(@"INSERT INTO businesses
                (id, name, pin, lat, lng, managerId)
                VALUES (@id, @name, @pin, @lat, @lng, @managerId);
                SELECT * FROM busns WHERE id = @id", new
            {
                id,
                name = busnReg.Name,
                lat = busnReg.Lat,
                lng = busnReg.Lng,
                pin = busnReg.Pin,
                managerId = busnReg.ManagerId
            });
            if (busn == null) return null;
            return busn;
        }

        public IEnumerable<User> GetEmployeesByBusiness(string busnId)
        {
            var emps = _db.Query<User>(@"SELECT * FROM businessEmployees be
            INNER JOIN users e ON e.id = be.employeeId
            WHERE businessId = @busnId;", new { busnId });
            if (emps == null) return null;
            foreach (User emp in emps)
            {
                emp.Hash = null;
            }
            return emps;
        }

        public Business GetBusinessByManager(string managerId)
        {
            return _db.Query<Business>(@"SELECT * FROM businesses
                WHERE managerId = @managerId", new { managerId }).FirstOrDefault();
        }

        public Business AddEmployeeToBusiness(EmployeeRegisterToBusiness empRegToBusn)
        {
            Business business = _db.Query<Business>(@"SELECT id FROM businesses
                WHERE pin = @Pin", empRegToBusn).FirstOrDefault();
            if (business == null) return null;
            int success = _db.Execute(@"INSERT INTO businessEmployees
                (employeeId, businessId)
                VALUES (@employeeId, @businessId);", new { 
                    employeeId = empRegToBusn.UserId,
                    businessId = business.Id
                 });
            if (success != 1) return null;
            business.Pin = null;
            business.ManagerId = null;
            return business;
        }

        public BusinessRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}