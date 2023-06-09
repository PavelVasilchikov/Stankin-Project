using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AAA.Models
{
    [Table("UserLogin")]
    public class User
    {
        [Key]
        public int userId { get; set; }
        [Required]
        public string? userName { get; set; }
        [Required]
        public string? userPassword { get; set; }
        
    }
}
