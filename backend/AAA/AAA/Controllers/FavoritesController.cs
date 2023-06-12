using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AAA.Models;

namespace AAA.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FavoritesController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public FavoritesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Favorites>>> GetFavorites()
        {
            return await _dbContext.Favorites.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Favorites>> GetFavorites(int id)
        {
            var favorites = await _dbContext.Favorites.FindAsync(id);

            if (favorites == null)
            {
                return NotFound();
            }

            return favorites;
        }

        [HttpPost]
        public async Task<ActionResult<Favorites>> PostFavorites(Favorites favorites)
        {
            _dbContext.Favorites.Add(favorites);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFavorites), new { id = favorites.id }, favorites);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutFavorites(int id, Favorites favorites)
        {
            if (id != favorites.id)
            {
                return BadRequest();
            }

            _dbContext.Entry(favorites).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavoritesExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavorites(int id)
        {
            var favorites = await _dbContext.Favorites.FindAsync(id);
            if (favorites == null)
            {
                return NotFound();
            }

            _dbContext.Favorites.Remove(favorites);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool FavoritesExists(int id)
        {
            return _dbContext.Favorites.Any(e => e.id == id);
        }
    }
}

