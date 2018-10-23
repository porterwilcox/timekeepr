using Microsoft.AspNetCore.Mvc;
using time.Repositories;

namespace time.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly EmployeeRepository _empRepo;
        private readonly BusinessRepository _busnRepo;


        public new Authenticate()
        public AccountController(EmployeeRepository empRepo, BusinessRepository busnRepo)
        {
            _empRepo = empRepo;
            _busnRepo = busnRepo;
        }
    }
}