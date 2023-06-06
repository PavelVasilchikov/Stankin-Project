using Microsoft.AspNetCore.Mvc;
using Yep_Back.Models;

namespace Yep_Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(start: 1, count: 5).Select(selector: index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(value: index),
                TemperatureC = Random.Shared.Next(minValue: -20, maxValue: 55),
                Summary = Summaries[Random.Shared.Next(maxValue: Summaries.Length)]
            })
            .ToArray();
        }
    }
}