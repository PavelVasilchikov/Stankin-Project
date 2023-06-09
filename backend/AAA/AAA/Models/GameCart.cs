using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AAA.Models
{
    [Table("GameCart")]
    public class GameCart
    {
        [Key]
        public int? id { get; set; }
        [Required]
        public string? tittle { get; set; }
        [Required]
        public string? price { get; set; }
        [Required]
        public string? altprice { get; set; }
        [Required]
        public string? imageUrl { get; set; }


    }
}
