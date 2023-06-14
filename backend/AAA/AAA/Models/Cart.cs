using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AAA.Models
{
    [Table("Cart")]
    public class Cart
    {
        [Key]
        public int id { get; set; }
        [Required]
        public int gameid { get; set; }
        [Required]
        public string? title { get; set; }
        [Required]
        public long price { get; set; }
        [Required]
        public string? imageUrl { get; set; }
        [Required]
<<<<<<< HEAD
        public int gameid { get; set; }
        [Required]
        public int counter { get; set; }
      
=======
        public int counter { get; set; }

>>>>>>> 3689d678dcab062f35a9a671ca44e24184f9ccd9
    }
}
