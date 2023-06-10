using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using AAA.Models;
using Microsoft.EntityFrameworkCore;

namespace AAA.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AllProductsListController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AllProductsListController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AllProductsList>> Get()
        {
            return _context.AllProductsLists.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<AllProductsList> GetById(int id)
        {
            var product = _context.AllProductsLists.FirstOrDefault(p => p.gameId == id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public IActionResult Create(AllProductsList product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AllProductsLists.Add(product);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = product.gameId }, product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, AllProductsList product)
        {
            if (id != product.gameId)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = _context.AllProductsLists.FirstOrDefault(p => p.gameId == id);

            if (product == null)
            {
                return NotFound();
            }

            _context.AllProductsLists.Remove(product);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
