using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace AAA.Models;
public class ApplicationDbContext : DbContext
{
    public DbSet<User> UserLogin { get; set; } = null!;
    public DbSet<GameCard> GameCard { get; set; } = null!;
    public DbSet<GameDescription> GameDescription { get; set; } = null!;
    public DbSet<AllProductsList> AllProductsLists { get; set; } = null!;
    public DbSet<Cart> Cart { get; set; } = null!;
    public DbSet<Favorites> Favorites { get; set; } = null!;

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
    
    

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=LAPTOP-2G2QH5OP;Database=Users;Trusted_Connection=True; TrustServerCertificate=true");
    }
}