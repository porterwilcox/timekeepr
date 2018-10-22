using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using time.Models;

namespace time.Repositories
{
    public class EmployeeRepository
    {
        IDbConnection _db;

        public Employee Login(EmployeeLogin empLogin)
        {
            Employee emp = _db.Query<Employee>(@"SELECT * FROM emps
                WHERE email = @Email;", new { empLogin }).FirstOrDefault();
            if (emp == null) return null;
            bool validPass = BCrypt.Net.BCrypt.Verify(empLogin.Password, emp.Hash);
            if (!validPass) return null;
            emp.Hash = null;
            return emp;
        }

        public Employee Register(EmployeeRegistration empReg)
        {
            string id = Guid.NewGuid().ToString();
            string hash = BCrypt.Net.BCrypt.HashPassword(empReg.Password);
            Employee emp = _db.ExecuteScalar<Employee>(@"INSERT INTO emps
                (id, firstName, lastName, email, hash)
                VALUES (@id, @firstName, @lastName, @email, @hash);
                SELECT * FROM emps WHERE id = @id", new {
                    id,
                    firstName = empReg.FirstName,
                    lastName = empReg.LastName,
                    email = empReg.Email,
                    hash
                });
            if (emp == null) return null;
            emp.Hash = null;
            return emp;
        }


        public EmployeeRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}