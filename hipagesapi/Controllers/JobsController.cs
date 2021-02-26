using AutoMapper;
using hipagesapi.Data;
using hipagesapi.Dto;
using hipagesapi.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

/**
 * 
 *  This controller is created to handle all the APi request 
 *  for retreiving the job details and updating the new status
 *  of the jobs
 * 
 */

namespace hipagesapi.Controllers
{
    // Set the route path for all the end point url of the APIs
    [Route("api/v1/jobs/[action]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly IJobRepo _repository;
        private readonly IMapper _mapper;

        // Constructor to initiate the repository and automapping class using dependency injection
        public JobsController(IJobRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        // GET request for retreiving the list of all the new jobs which are available
        [HttpGet]
        public ActionResult<IEnumerable<JobDetailsDto>> GetAllAvailibleJobs()
        {
            try
            {
                // Fetch the job details from the database
                var jobList = _repository.GetAllJobs();

                // Check if the result is empty and return no Content status
                if (jobList == null)
                {
                    return NoContent();
                }

                // Return the list of jobs with an OK status
                return Ok(jobList);
            }
            catch (Exception ex)
            {
                // Send error status with message details
                return Problem(ex.Message);
            }

        }

        [HttpGet]
        public ActionResult<IEnumerable<JobDetailsDto>> GetAllJobsAccepted()
        {
            try
            {
                // Fetch the job details from the database
                var jobList = _repository.GetAllJobsAccepted();

                // Check if the result is empty and return no Content status
                if (jobList == null)
                {
                    return NoContent();
                }

                // Return the list of jobs with an OK status
                return Ok(jobList);
            }
            catch (Exception ex)
            {
                // Send error status with message details
                return Problem(ex.Message);
            }

        }

        [HttpGet("{id}")]
        public ActionResult<Jobs> GetJobById(int id)
        {
            try
            {
                // Fetch the job based on the job id
                var job = _repository.GetJobsById(id);

                // Check if the result is empty and return no Content status
                if (job == null)
                {
                    return NoContent();
                }

                // Return the job details with an OK status
                return Ok(_mapper.Map<JobDescriptionDto>(job));
            }
            catch (Exception ex)
            {
                // Send error status with message details
                return Problem(ex.Message);
            }

        }

        [HttpPatch("{id}")]
        public ActionResult UpdateContract(int id, JsonPatchDocument<JobDescriptionDto> patchDoc)
        {
            try
            {
                // Fetch the job based on the job id to check if its a valid job id
                var job = _repository.GetJobsById(id);

                // Return not found status if the job id does not exist
                if (job == null)
                {
                    return NotFound();
                }

                // Check if the patch request is valid
                var jobToPatch = _mapper.Map<JobDescriptionDto>(job);
                patchDoc.ApplyTo(jobToPatch, ModelState);

                // Return validation problem status if the patch request is invalid
                if (!TryValidateModel(jobToPatch))
                {
                    return ValidationProblem(ModelState);
                }

                _mapper.Map(jobToPatch, job);

                // Update the corresponding value in teh database
                _repository.UpdateJob(job);

                _repository.SaveChanges();

                // Return no content status as no response is required
                return NoContent();
            }
            catch (Exception ex)
            {
                // Send error status with message details
                return Problem(ex.Message);
            }
        }
    }
}
