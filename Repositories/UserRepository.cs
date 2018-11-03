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

        public User Login(UserLogin userLogin)
        {
            User user = _db.Query<User>(@"SELECT * FROM users
                WHERE email = @Email;", userLogin).FirstOrDefault();
            if (user == null) return null;
            bool validPass = BCrypt.Net.BCrypt.Verify(userLogin.Password, user.Hash);
            if (!validPass) return null;
            user.Hash = null;
            return user;
        }

        public User Register(UserRegistration userReg)
        {
            string id = Guid.NewGuid().ToString();
            string hash = BCrypt.Net.BCrypt.HashPassword(userReg.Password);
            int success = _db.Execute(@"INSERT INTO users
                (id, firstName, lastName, email, hash)
                VALUES (@id, @firstName, @lastName, @email, @hash);", new
            {
                id,
                firstName = userReg.FirstName,
                lastName = userReg.LastName,
                email = userReg.Email,
                hash
            });
            if (success != 1) return null;
            return new User() {
                Id = id,
                FirstName = userReg.FirstName,
                LastName = userReg.LastName,
                Email = userReg.Email,
                Hash = hash
            };
        }

        internal User GetUserById(string id)
        {
            User user = _db.Query<User>(@"SELECT * FROM users 
                WHERE id = @id;", new {id}).FirstOrDefault();
            if (user == null) return null;
            user.Hash = null;
            return user;
        }

        public UserRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}