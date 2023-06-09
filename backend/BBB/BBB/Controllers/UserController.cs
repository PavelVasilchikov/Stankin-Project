﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BBB.Models;

namespace BBB.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _userscontext;
        public UserController(ApplicationDbContext usercontext)
        {
            _userscontext = usercontext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _userscontext.UserLogin.ToArrayAsync();
            return Ok(users);
        }
    }
}
