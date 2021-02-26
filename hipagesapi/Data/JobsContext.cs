using hipagesapi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hipagesapi.Data
{
    public class JobsContext : DbContext
    {
        public JobsContext(DbContextOptions<JobsContext> opt) : base(opt)
        {

        }

        public DbSet<Jobs> jobs { get; set; }
    }
}
