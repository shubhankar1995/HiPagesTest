using hipagesapi.Data;
using hipagesapi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hipagesapi.Controllers
{
    [Route("api/v1/jobs")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly IJobRepo _repository;

        public JobsController(IJobRepo repository)
        {
            _repository = repository;
        }

        //private readonly MockJobsRepo _repository = new MockJobsRepo();

        [HttpGet]
        public ActionResult<IEnumerable<Jobs>> GetAllJobs()
        {
            var jobList = _repository.GetAllJobs();

            return Ok(jobList);

        }

        [HttpGet("{id}")]
        public ActionResult<Jobs> GetJobById(int id)
        {
            var job = _repository.GetJobsById(id);

            return Ok(job);
        }
    }
}
