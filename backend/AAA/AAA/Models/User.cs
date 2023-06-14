using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AAA.Models
{
    [Table("UserLogin")]
    public class User
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string? email { get; set; }
        [Required]
        public string? password { get; set; }
        [Required]
        public string? name { get; set; }
        [Required]
        public string? login { get; set; }
        [Required]
        public string? Steam { get; set; }

    }
}
