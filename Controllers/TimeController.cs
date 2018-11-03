using System;
using System.Collections.Generic;
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
        public Business CreateBusiness([FromBody] BusinessRegistration creds)
        {
            if (!ModelState.IsValid) throw new Exception("Invalid information");
            return _repo.Register(creds);
        }

        [HttpGet("manager/{managerId}")]
        public Business GetBusinessForManager([FromRoute] string managerId)
        {
            return _repo.GetBusinessByManager(managerId);
        }

        [HttpGet("employee/{employeeId}")]
        public Business GetBusinessForEmployee([FromRoute] string employeeId)
        {
            return _repo.GetBusinessByEmployee(employeeId);
        }

        [HttpPost]
        [Route("enroll")]
        public Business EnrollInBusiness([FromBody] EmployeeRegisterToBusiness creds)
        {
            if (!ModelState.IsValid) throw new Exception("Invalid information.");
            return _repo.AddEmployeeToBusiness(creds);
        }

        [HttpGet("employees/{businessId}")]
        public IEnumerable<User> GetEmployeesForManager(string businessId)
        {
            return _repo.GetEmployeesByBusinessId(businessId);
        }

        [HttpPost]
        [Route("clockin")]
        public UserTime CreateClockIn([FromBody] UserTime time)
        {
            if (!ModelState.IsValid) throw new Exception("Invalid information");
            return _repo.CreateClockIn(time);
        }


        public TimeController(BusinessRepository repo)
        {
            _repo = repo;
        }
    }
}