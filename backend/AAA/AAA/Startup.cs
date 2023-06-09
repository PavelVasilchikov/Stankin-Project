using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using AAA.Models;
using AAA.Controllers;

namespace AAA
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            //app.AddDbContext<ApplicationDbContext>(options =>
  //  options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

        }
    }
}
