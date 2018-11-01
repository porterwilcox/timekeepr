using System.ComponentModel.DataAnnotations;

namespace time.Models
{
    public class EmployeeRegisterToBusiness
    {
        [Required]
        public string UserId { get; set; }

        [Required]
        public string Pin { get; set; }
    }

    public class BusinessRegistration
    {
        [Required]
        public string ManagerId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public float Lat { get; set; }

        [Required]
        public float Lng { get; set; }

        [Required]
        public string Pin { get; set; }
    }
    public class Business
    {
        public string Id { get; set; }

        [Required]
        public string ManagerId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public float Lat { get; set; }

        [Required]
        public float Lng { get; set; }

        [Required]
        public string Pin { get; set; }
    }
}