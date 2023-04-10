using BlazorApp1.Data;
using Microsoft.AspNetCore.Mvc;

namespace WebComponents.Controllers;

public class WeatherForecastController : Controller
{
    private static readonly string[] Summaries = {
        "Freezing", "Bracing", "Chilly", "Cool", 
        "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [HttpGet, Route("forecasts")]
    public ActionResult<WeatherForecast[]> Get(DateOnly? startDate = null)
    {
        var now = DateTime.Now;
        startDate ??= new DateOnly(now.Year, now.Month, now.Day);
        
        return Ok(Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = startDate.Value.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        }).ToArray());
    }
}