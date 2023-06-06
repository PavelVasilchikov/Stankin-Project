using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Yep_Back.Models;
using Microsoft.AspNetCore.Mvc;
using ReactApi.Data;

namespace ReactApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _context.User.ToList();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _context.User.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public IActionResult Create(User user)
        {
            _context.User.Add(user);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = user.IdUser}, user);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, User updatedUser)
        {
            var user = _context.User.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            user.UserName = updatedUser.UserName;
            //user.Email = updatedUser.Email;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = _context.User.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
