﻿using System;

/**
 * 
 *  This class has been created to act as a data transfer object
 *  for the job table 
 * 
 */

namespace hipagesapi.Dto
{
    public class JobDescriptionDto
    {
        public int Id { get; set; }

        public string Status { get; set; }

        public int Suburb_id { get; set; }

        public int Category_id { get; set; }

        public string Contact_name { get; set; }

        public string Contact_phone { get; set; }

        public string Contact_email { get; set; }

        public int Price { get; set; }

        public string Description { get; set; }

        public DateTime Created_at { get; set; }
    }
}
