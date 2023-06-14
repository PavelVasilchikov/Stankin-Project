using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AAA.Models
{
    [Table("Favorites")]
    public class Favorites
    {
        [Key]
        public int id { get; set; }
        [Required]
        public int? gameid { get; set; }
        [Required]
        public string? title { get; set; }
        [Required]
        public long price { get; set; }
        [Required]
        public string? imageUrl { get; set; }
        [Required]
        public int gameid { get; set; }

    }
}