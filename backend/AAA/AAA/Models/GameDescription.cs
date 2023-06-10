using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AAA.Models
{
    [Table("GameDescription")]
    public class GameDescription
    {
        [Key]
        public int? id { get; set; }
        [Required]
        public int? gameId { get; set; }
        [Required]
        public string? description { get; set; }
    }
}
