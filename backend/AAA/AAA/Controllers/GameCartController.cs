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
        public async Task<IActionResult> UpdateGameCartItem(int id, GameCart gameCartItem)
        {
            if (id != gameCartItem.id)
            {
                return BadRequest();
            }

            _context.Entry(gameCartItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameCartItemExists(id))
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

            return NoContent();
        }

        private bool GameCartItemExists(int id)
        {
            return _context.GameCart.Any(e => e.id == id);
        }
    }
}
