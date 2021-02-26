using AutoMapper;
using hipagesapi.Data;
using hipagesapi.Dto;
using hipagesapi.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hipagesapi.Controllers
{
    [Route("api/v1/jobs/[action]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly IJobRepo _repository;
        private readonly IMapper _mapper;

        public JobsController(IJobRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //private readonly MockJobsRepo _repository = new MockJobsRepo();

        //[HttpGet]
        //public ActionResult<IEnumerable<JobDescriptionDto>> GetAllJobs()
        //{
        //    var jobList = _repository.GetAllJobs();

        //    return Ok(_mapper.Map<IEnumerable<JobDescriptionDto>>(jobList));

        //}

        [HttpGet]
        public ActionResult<IEnumerable<JobDetailsDto>> GetAllAvailibleJobs()
        {
            var jobList = _repository.GetAllJobs();

            return Ok(jobList);

        }

        [HttpGet]
        public ActionResult<IEnumerable<JobDetailsDto>> GetAllJobsAccepted()
        {
            var jobList = _repository.GetAllJobsAccepted();

            return Ok(jobList);

        }

        [HttpGet("{id}")]
        public ActionResult<Jobs> GetJobById(int id)
        {
            var job = _repository.GetJobsById(id);

            return Ok(_mapper.Map<JobDescriptionDto>(job));
        }

        [HttpPatch("{id}")]
        public ActionResult UpdateContract(int id, JsonPatchDocument<JobDescriptionDto> patchDoc)
        {
            var job = _repository.GetJobsById(id);
            if (job == null)
            {
                return NotFound();
            }
            var jobToPatch = _mapper.Map<JobDescriptionDto>(job);
            patchDoc.ApplyTo(jobToPatch, ModelState);

            if (!TryValidateModel(jobToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(jobToPatch, job);

            _repository.UpdateJob(job);

            _repository.SaveChanges();

            return NoContent();
        }
    }
}
