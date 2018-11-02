using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace time.Models
{
    public class UserTime
    {
        public int Id { get; set; }

        [Required]
        public string EmployeeId { get; set; }
    
        [Required]
        public string BusinessId { get; set; }

        [Required]
        public long ClockIn { get; set; }

        public long ClockOut { get; set; } = 0;
    }

    public class UserLogin
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
    public class UserRegistration
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
    public class User
    {
        public string Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Hash { get; set; }

        [Required]
        public int isEmployee { get; set; } = 0;

        [Required]
        public int isManager { get; set; } = 0;

        //Authentication below
        internal ClaimsPrincipal _principal { get; private set; }


        internal void SetClaims()
        {
            var claims = new List<Claim>{
                new Claim(ClaimTypes.Name, Id),
                new Claim(ClaimTypes.Email, Email)
            };
            var userIdentity = new ClaimsIdentity(claims, "login");
            _principal = new ClaimsPrincipal(userIdentity);
        }
    }
}