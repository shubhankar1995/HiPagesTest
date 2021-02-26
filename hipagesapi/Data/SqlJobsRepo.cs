using hipagesapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hipagesapi.Data
{
    public class SqlJobsRepo : IJobRepo
    {
        private readonly JobsContext _context;

        public SqlJobsRepo(JobsContext context)
        {
            _context = context;
        }

        public IEnumerable<Jobs> GetAllJobs()
        {
            return _context.jobs.ToList();
        }

        public Jobs GetJobsById(int id)
        {
            return _context.jobs.FirstOrDefault(p => p.Id == id);
        }
    }
}
