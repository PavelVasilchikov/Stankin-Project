using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AAA.Models
{
    [Table("allProd")]
    public class AllProductsList
    {
        [Key]
        public int? gameId { get; set; }
        [Required]
        public string? gameName { get; set; }
        [Required]
        public long? price { get; set; }
        [Required]
        public long? altprice { get; set; }
        [Required]
        public string? tag { get; set; }
        [Required]
        public string? description { get; set; }

    }
}
