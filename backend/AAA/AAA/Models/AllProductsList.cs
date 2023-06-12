using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AAA.Models
{
    [Table("allProd")]
    public class AllProductsList
    {
        [Key]
        public int GameId { get; set; }
        [Required]
        public string? GameName { get; set; }
        [Required]
        public long Price { get; set; }
        [Required]
        public long Altprice { get; set; }
        [Required]
        public string? Tag { get; set; }
        [Required]
        public string? Description { get; set; }

    }
}
