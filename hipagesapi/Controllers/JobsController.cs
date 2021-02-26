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

        [HttpGet]
        public ActionResult<IEnumerable<JobDetailsDto>> GetAllAvailibleJobs()
        {
            try
            {
                var jobList = _repository.GetAllJobs();

                if (jobList == null)
                {
                    return NoContent();
                }

                return Ok(jobList);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }

        [HttpGet]
        public ActionResult<IEnumerable<JobDetailsDto>> GetAllJobsAccepted()
        {
            try
            {
                var jobList = _repository.GetAllJobsAccepted();

                if (jobList == null)
                {
                    return NoContent();
                }

                return Ok(jobList);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }

        [HttpGet("{id}")]
        public ActionResult<Jobs> GetJobById(int id)
        {
            try
            {
                var job = _repository.GetJobsById(id);

                if (job == null)
                {
                    return NoContent();
                }

                return Ok(_mapper.Map<JobDescriptionDto>(job));
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }

        [HttpPatch("{id}")]
        public ActionResult UpdateContract(int id, JsonPatchDocument<JobDescriptionDto> patchDoc)
        {
            try
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
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }
    }
}
