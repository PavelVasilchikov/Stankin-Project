using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AAA.Models
{
    [Table("gameSale")]
    public class GameCard
    {
        [Key]
        public int? id { get; set; }
        [Required]
        public string? title { get; set; }
        [Required]
        public long? price { get; set; }
        [Required]
        public long? altprice { get; set; }
        [Required]
        public string? imageUrl { get; set; }


    }
}
