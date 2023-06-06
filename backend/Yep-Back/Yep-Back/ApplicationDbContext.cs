using Microsoft.EntityFrameworkCore;
using ReactApi.Data;
using Yep_Back.Models;
namespace ReactApi.Data;

public class ApplicationDbContext : DbContext
{
    public DbSet<User> User { get; set; } = null!;
   

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Server=LAPTOP-2G2QH5OP;Database=Yep-shop;Trusted_Connection=True;");
    }
}