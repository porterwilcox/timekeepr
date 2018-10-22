using System.Collections.Generic;
using System.Data;
using Dapper;
using time.Models;

namespace time.Repositories
{
    public class BusinessRepository
    {
        IDbConnection _db;






        public IEnumerable<Employee> GetEmpsByBusn(string busnId)
        {
            var emps = _db.Query<Employee>(@"SELECT * FROM busnEmps be
            INNER JOIN emps e ON e.id = be.empId
            WHERE busnId = @busnId;", new { busnId });

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