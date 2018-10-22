using System.Data;
using System.Linq;
using Dapper;
using time.Models;

namespace time.Repositories
{
    public class EmployeeRepository
    {
        IDbConnection _db;

        //Get one employee
        public Employee Get(EmployeeLogin empLogin)
        {
            Employee _db.Query<Employee>(@"SELECT FROM emps
            WHERE email = @Email;", new { empLogin }).FirstOrDefault();
        }




        public EmployeeRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}