using AutoMapper;
using hipagesapi.Dto;
using hipagesapi.Models;

/**
 * 
 *  This Profile class has been created for auto mapping
 *  the data transfer objects
 * 
 */


namespace hipagesapi.Profiles
{
    public class JobProfile : Profile
    {
        public JobProfile()
        {
            CreateMap<Jobs, JobDescriptionDto>();
            CreateMap<JobDescriptionDto, Jobs>();
        }

        
    }
}
