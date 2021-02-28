using hipagesapi.Dto;
using hipagesapi.Models;
using System.Collections.Generic;
using System.Linq;

/**
 * 
 *  This class is created to implement the database query 
 *  for retreiving the job details and updating the new status
 *  of the jobs
 * 
 */

namespace hipagesapi.Data
{
    public class SqlJobsRepo : IJobRepo
    {
        private readonly JobsContext _context;

        // Constructor to initiate the database context
        public SqlJobsRepo(JobsContext context)
        {
            _context = context;
        }

        // Fetch all the jobs which have new status
        public IEnumerable<JobDetailsDto> GetAllJobs()
        {
            var availableJobs = (from j in _context.jobs
                              join c in _context.categories on j.Category_id equals c.Id
                              join s in _context.suburbs on j.Suburb_id equals s.Id
                              where j.Status == "new"
                              select new JobDetailsDto
                              {
                                  Id = j.Id,
                                  Status = j.Status,
                                  Suburb = s.Name,
                                  PostCode = s.Postcode,
                                  Contact_name = j.Contact_name,
                                  Contact_phone = j.Contact_phone,
                                  Contact_email = j.Contact_email,
                                  Price = j.Price,
                                  Description = j.Description,
                                  Category = c.Name,
                                  Created_at = j.Created_at
                              });

            return availableJobs;
        }

        // Fetch all the jobs which have been accepted
        public IEnumerable<JobDetailsDto> GetAllJobsAccepted()
        {
            var acceptedJobs = (from j in _context.jobs
                              join c in _context.categories on j.Category_id equals c.Id
                              join s in _context.suburbs on j.Suburb_id equals s.Id
                              where j.Status == "accepted"
                              select new JobDetailsDto
                              {
                                  Id = j.Id,
                                  Status = j.Status,
                                  Suburb = s.Name,
                                  PostCode = s.Postcode,
                                  Contact_name = j.Contact_name,
                                  Contact_phone = j.Contact_phone,
                                  Contact_email = j.Contact_email,
                                  Price = j.Price,
                                  Description = j.Description,
                                  Category = c.Name,
                                  Created_at = j.Created_at
                              });

            return acceptedJobs;
        }

        // Fetch the job which based on the job id
        public Jobs GetJobsById(int id)
        {
            return _context.jobs.FirstOrDefault(p => p.Id == id);
        }

        // Save all the changes which have been made to the database
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0 );
        }

        // Update the status of the job
        public void UpdateJob(Jobs job)
        {
            //Do nothing
        }
    }
}
