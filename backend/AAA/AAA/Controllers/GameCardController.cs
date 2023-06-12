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
    public class GameCardController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GameCardController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/GameCart
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GameCard>>> GetGameCart()
        {
            return await _context.GameCard.ToListAsync();
        }

        // GET: api/GameCart/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GameCard>> GetGameCartItem(int id)
        {
            var gameCartItem = await _context.GameCard.FindAsync(id);

            if (gameCartItem == null)
            {
                return NotFound();
            }

            return gameCartItem;
        }

        // PUT: api/GameCart/5
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, GameCard gameCart)
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
            return _context.GameCard.Any(e => e.id == id);
        }

        // POST: api/GameCart
        [HttpPost]
        public async Task<ActionResult<GameCard>> AddGameCartItem(GameCard gameCartItem)
        {
            _context.GameCard.Add(gameCartItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGameCartItem), new { id = gameCartItem.id }, gameCartItem);
        }

        // DELETE: api/GameCart/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGameCartItem(int id)
        {
            var gameCartItem = await _context.GameCard.FindAsync(id);
            if (gameCartItem == null)
            {
                return NotFound();
            }

            _context.GameCard.Remove(gameCartItem);
            await _context.SaveChangesAsync();
            _context.SaveChanges();

            return NoContent();
        }

        private bool GameCartItemExists(int id)
        {
            return _context.GameCard.Any(e => e.id == id);
        }

    }
}
