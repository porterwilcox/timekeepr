using System.ComponentModel.DataAnnotations;

namespace time.Models
{
    public class NewBusiness
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }
        
        [Required]
        public float Lat { get; set; }

        [Required]
        public float Lng { get; set; }

        [Required]
        public string Password { get; set; }
    }
    public class Business
    {
        [Required]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Hash { get; set; }

        [Required]
        public float Lat { get; set; }

        [Required]
        public float Lng { get; set; }
    }
}