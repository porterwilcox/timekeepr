using Microsoft.AspNetCore.Mvc;
using time.Repositories;

namespace time.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly UserRepository _empRepo;
        private readonly BusinessRepository _busnRepo;


        public new Authenticate()
        public AccountController(UserRepository empRepo, BusinessRepository busnRepo)
        {
            _empRepo = empRepo;
            _busnRepo = busnRepo;
        }
    }
}