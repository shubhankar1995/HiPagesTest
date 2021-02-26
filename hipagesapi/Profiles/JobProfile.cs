using AutoMapper;
using hipagesapi.Dto;
using hipagesapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
