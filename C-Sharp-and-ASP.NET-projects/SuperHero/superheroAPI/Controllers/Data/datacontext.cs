using Microsoft.EntityFrameworkCore;

namespace superheroAPI.Controllers.Data
{
    public class datacontext : DbContext
    {
        public datacontext(DbContextOptions<datacontext> options) : base(options) { }

        public DbSet<superhero> superhero { get; set; }
    }
}
