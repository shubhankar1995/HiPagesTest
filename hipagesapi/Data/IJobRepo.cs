using hipagesapi.Dto;
using hipagesapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hipagesapi.Data
{
    public interface IJobRepo
    {

        bool SaveChanges();
        IEnumerable<JobDetailsDto> GetAllJobs();

        IEnumerable<JobDetailsDto> GetAllJobsAccepted();
        Jobs GetJobsById(int id);
        void UpdateJob(Jobs job);
    }
}
