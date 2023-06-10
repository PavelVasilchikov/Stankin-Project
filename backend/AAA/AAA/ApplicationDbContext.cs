using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace AAA.Models;
public class ApplicationDbContext : DbContext
{
    public DbSet<User> UserLogin { get; set; } = null!;
    public DbSet<GameCart> GameCart { get; set; } = null!;

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
    
    

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

        optionsBuilder.UseSqlServer(@"Server=localhost;Database=Users;Trusted_Connection=True;");

    }
}