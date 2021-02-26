using hipagesapi.Models;
using Microsoft.EntityFrameworkCore;

/**
 * 
 *  This class is created to create the context for the database
 *  and the table mapping
 * 
 */

namespace hipagesapi.Data
{
    public class JobsContext : DbContext
    {
        public JobsContext(DbContextOptions<JobsContext> opt) : base(opt)
        {

        }

        public DbSet<Jobs> jobs { get; set; }

        public DbSet<Categories> categories { get; set; }

        public DbSet<Suburbs> suburbs { get; set; }
    }
}
