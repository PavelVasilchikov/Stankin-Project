using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Yep_Shop_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FactorioController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public FactorioController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


       
    }
}
