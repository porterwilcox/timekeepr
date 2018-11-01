using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using time.Models;
using time.Repositories;

namespace time.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly UserRepository _userRepo;
        private readonly BusinessRepository _busnRepo;

        [Authorize]
        [HttpGet("Authenticate")]
        public User Authenticate()
        {
            var id = HttpContext.User.Identity.Name;
            return _userRepo.GetUserById(id);
        }
        public AccountController(UserRepository userRepo, BusinessRepository busnRepo)
        {
            _userRepo = userRepo;
            _busnRepo = busnRepo;
        }
    }
}