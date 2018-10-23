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

        public Business Login(BusinessLogin busnLogin)
        {
            Business busn = _db.Query<Business>(@"SELECT * FROM busns
                WHERE email = @Email;", new { busnLogin }).FirstOrDefault();
            if (busn == null) return null;
            bool validPass = BCrypt.Net.BCrypt.Verify(busnLogin.Password, busn.Hash);
            if (!validPass) return null;
            busn.Hash = null;
            return busn;
        }

        public Business Register(BusinessRegistration busnReg)
        {
            string id = Guid.NewGuid().ToString();
            string hash = BCrypt.Net.BCrypt.HashPassword(busnReg.Password);
            Business busn = _db.ExecuteScalar<Business>(@"INSERT INTO busns
                (id, name, email, hash, lat, lng)
                VALUES (@id, @name, @email, @hash, @lat, @lng);
                SELECT * FROM busns WHERE id = @id", new {
                    id,
                    name = busnReg.Name,
                    email = busnReg.Email,
                    hash,
                    lat = busnReg.Lat,
                    lng = busnReg.Lng
                });
            if (busn == null) return null;
            busn.Hash = null;
            return busn;
        }

        public IEnumerable<Employee> GetEmpsByBusn(string busnId)
        {
            var emps = _db.Query<Employee>(@"SELECT * FROM busnEmps be
            INNER JOIN emps e ON e.id = be.empId
            WHERE busnId = @busnId;", new { busnId });
            if (emps == null) return null;
            foreach(Employee emp in emps)
            {
                emp.Hash = null;
            }
            return emps;
        }

        public BusinessRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}