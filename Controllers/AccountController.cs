using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
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

        [HttpPost("Login")]
        public async Task<User> Login([FromBody] UserLogin creds)
        {
            if (!ModelState.IsValid) throw new Exception("Invalid information");
            User user = _userRepo.Login(creds);
            if (user == null) throw new Exception("No user with that email and password combination");
            user.SetClaims();
            await HttpContext.SignInAsync(user._principal);
            return user;
        }

        [HttpPost("Register")]
        public async Task<User> Register([FromBody] UserRegistration creds)
        {
            if (!ModelState.IsValid) throw new Exception("Invalid information");
            User user = _userRepo.Register(creds);
            if (user == null) throw new Exception("Unable to create new user account.");
            user.SetClaims();
            await HttpContext.SignInAsync(user._principal);
            return user;
        }

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