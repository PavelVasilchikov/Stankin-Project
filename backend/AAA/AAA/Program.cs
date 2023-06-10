
using System.Net;
using System.Security.Cryptography.X509Certificates;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using AAA.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;

ServicePointManager.ServerCertificateValidationCallback +=
           (sender, cert, chain, sslPolicyErrors) => true;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactJSDomain",
        policy => policy.WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin()
        );
});

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{  
    options.UseSqlServer(builder.Configuration.GetConnectionString("Yep-ShopConnection"));
});



var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
