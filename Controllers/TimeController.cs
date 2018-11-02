using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using time.Models;
using time.Repositories;

namespace time.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TimeController : Controller
    {
        private readonly BusinessRepository _repo;

        [HttpPost]
        [Route("register")]
        public Business Post([FromBody] BusinessRegistration creds)
        {
            if (!ModelState.IsValid) throw new Exception("Invalid information");
            return _repo.Register(creds);
        }

        [HttpGet("manager/{managerId}")]
        public Business Get([FromRoute] string managerId)
        {
            return _repo.GetBusinessByManager(managerId);
        }

        [HttpGet("employee/{employeeId}")]
        public Business Get([FromRoute] string employeeId)
        {
            return _repo.GetBusinessByEmployee(employeeId);
        }


        public TimeController(BusinessRepository repo)
        {
            _repo = repo;
        }
    }
}