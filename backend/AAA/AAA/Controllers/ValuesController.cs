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
    public class GameDescriptionsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GameDescriptionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/GameDescriptions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GameDescription>>> GetGameDescriptions()
        {
            return await _context.GameDescription.ToListAsync();
        }

        // GET: api/GameDescriptions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GameDescription>> GetGameDescription(int id)
        {
            var gameDescription = await _context.GameDescription.FindAsync(id);

            if (gameDescription == null)
            {
                return NotFound();
            }

            return gameDescription;
        }

        // PUT: api/GameDescriptions/5
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGameDescription(int id, GameDescription gameDescription)
        {
            if (id != gameDescription.id)
            {
                return BadRequest();
            }

            _context.Entry(gameDescription).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameDescriptionExists(id))
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

        // POST: api/GameDescriptions
        
        [HttpPost]
        public async Task<ActionResult<GameDescription>> PostGameDescription(GameDescription gameDescription)
        {
            _context.GameDescription.Add(gameDescription);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGameDescription", new { id = gameDescription.id }, gameDescription);
        }

        // DELETE: api/GameDescriptions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGameDescription(int id)
        {
            var gameDescription = await _context.GameDescription.FindAsync(id);
            if (gameDescription == null)
            {
                return NotFound();
            }

            _context.GameDescription.Remove(gameDescription);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GameDescriptionExists(int id)
        {
            return _context.GameDescription.Any(e => e.id == id);
        }
    }
}