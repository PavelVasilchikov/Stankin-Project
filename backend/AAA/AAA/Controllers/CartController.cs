using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using AAA.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace AAA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CartController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Cart
        [HttpGet]
        public ActionResult<IEnumerable<Cart>> GetCarts()
        {
            return _context.Cart;
        }

        // GET: api/Cart/5
        [HttpGet("{id}")]
        public ActionResult<Cart> GetCart(int id)
        {
            var cart = _context.Cart.Find(id);

            if (cart == null)
            {
                return NotFound();
            }

            return cart;
        }

        // POST: api/Cart
        [HttpPost]
        public ActionResult<Cart> PostCart(Cart cart)
        {
            _context.Cart.Add(cart);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetCart), new { id = cart.id }, cart);
        }

        // PUT: api/Cart/5
        [HttpPut("{id}")]
        public IActionResult PutCart(int id, Cart cart)
        {
            if (id != cart.id)
            {
                return BadRequest();
            }

            _context.Entry(cart).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Cart/5
        [HttpDelete("{id}")]
        public ActionResult<Cart> DeleteCart(int id)
        {
            var cart = _context.Cart.Find(id);
            if (cart == null)
            {
                return NotFound();
            }

            _context.Cart.Remove(cart);
            _context.SaveChanges();

            return cart;
        }
    }
}
