using hipagesapi.Dto;
using hipagesapi.Models;
using System.Collections.Generic;

/**
 * 
 *  This repository is created to enforce the operations 
 *  that have to be implemented to perform on the database 
 * 
 */

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
