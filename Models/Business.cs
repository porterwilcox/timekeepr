using System.ComponentModel.DataAnnotations;

namespace time.Models
{
    public class BusinessRegistration
    {
        [Required]
        public string Name { get; set; }

        // [Required]
        // public string Email { get; set; }

        [Required]
        public float Lat { get; set; }

        [Required]
        public float Lng { get; set; }
    }
    public class Business
    {
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        // [Required]
        // public string Email { get; set; }

        [Required]
        public float Lat { get; set; }

        [Required]
        public float Lng { get; set; }
    }
}