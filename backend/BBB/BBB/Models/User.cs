using System.ComponentModel.DataAnnotations;

namespace BBB.Models
{
    public class User
    {
        [Key]
        public string UserName { get; set; }
        public string? UserPassword { get; set; }
        public int UserId { get; set; }
    }
}
