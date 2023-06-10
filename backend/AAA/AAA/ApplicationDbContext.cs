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
<<<<<<< HEAD:backend/BBB/BBB/ApplicationDbContext.cs
        optionsBuilder.UseSqlServer(@"Server=localhost;Database=Users;Trusted_Connection=True;");
=======
        optionsBuilder.UseSqlServer("Server=localhost;Database=Users;Trusted_Connection=True; TrustServerCertificate=true");
>>>>>>> b832a2bbcddf8254379c956c106d046686109ad1:backend/AAA/AAA/ApplicationDbContext.cs
    }
}