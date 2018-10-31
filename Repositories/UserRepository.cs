using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using time.Models;

namespace time.Repositories
{
    public class UserRepository
    {
        IDbConnection _db;

        public User Login(UserLogin empLogin)
        {
            User emp = _db.Query<User>(@"SELECT * FROM emps
                WHERE email = @Email;", new { empLogin }).FirstOrDefault();
            if (emp == null) return null;
            bool validPass = BCrypt.Net.BCrypt.Verify(empLogin.Password, emp.Hash);
            if (!validPass) return null;
            emp.Hash = null;
            return emp;
        }

        public User Register(UserRegistration empReg)
        {
            string id = Guid.NewGuid().ToString();
            string hash = BCrypt.Net.BCrypt.HashPassword(empReg.Password);
            User emp = _db.ExecuteScalar<User>(@"INSERT INTO emps
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


        public UserRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}