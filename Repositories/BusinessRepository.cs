using System.Data;

namespace time.Repositories
{
    public class BusinessRepository
    {
        IDbConnection _db;

        




        public BusinessRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}