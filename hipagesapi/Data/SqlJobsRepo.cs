using hipagesapi.Dto;
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

        public IEnumerable<JobDetailsDto> GetAllJobs()
        {
            var entryPoint = (from j in _context.jobs
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
                                  Updated_at = j.Updated_at
                              });

            return entryPoint;
        }

        public IEnumerable<JobDetailsDto> GetAllJobsAccepted()
        {
            var entryPoint = (from j in _context.jobs
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
                                  Updated_at = j.Updated_at
                              });

            return entryPoint;
        }

        public Jobs GetJobsById(int id)
        {
            return _context.jobs.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0 );
        }

        public void UpdateJob(Jobs job)
        {
            //Do nothing
        }
    }
}
