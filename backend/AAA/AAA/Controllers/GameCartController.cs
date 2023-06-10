using AAA.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AAA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameCartController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GameCartController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/GameCart
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GameCart>>> GetGameCart()
        {
            return await _context.GameCart.ToListAsync();
        }

        // GET: api/GameCart/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GameCart>> GetGameCartItem(int id)
        {
            var gameCartItem = await _context.GameCart.FindAsync(id);

            if (gameCartItem == null)
            {
                return NotFound();
            }

            return gameCartItem;
        }

        // PUT: api/GameCart/5
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, GameCart gameCart)
        {
            if (id != gameCart.id)
            {
                return BadRequest();
            }

            _context.Entry(gameCart).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.GameCart.Any(e => e.id == id);
        }

        // POST: api/GameCart
        [HttpPost]
        public async Task<ActionResult<GameCart>> AddGameCartItem(GameCart gameCartItem)
        {
            _context.GameCart.Add(gameCartItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGameCartItem), new { id = gameCartItem.id }, gameCartItem);
        }

        // DELETE: api/GameCart/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGameCartItem(int id)
        {
            var gameCartItem = await _context.GameCart.FindAsync(id);
            if (gameCartItem == null)
            {
                return NotFound();
            }

            _context.GameCart.Remove(gameCartItem);
            await _context.SaveChangesAsync();
            _context.SaveChanges();

            return NoContent();
        }

        private bool GameCartItemExists(int id)
        {
            return _context.GameCart.Any(e => e.id == id);
        }

    }
}
