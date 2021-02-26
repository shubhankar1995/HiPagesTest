using hipagesapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hipagesapi.Data
{
    public interface IJobRepo
    {
        IEnumerable<Jobs> GetAllJobs();
        Jobs GetJobsById(int id);
    }
}
