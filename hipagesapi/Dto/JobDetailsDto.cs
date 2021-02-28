using System;

/**
 * 
 *  This class has been created to act as a data transfer object
 *  for the job table mapped with teh categories and suburbs 
 * 
 */


namespace hipagesapi.Dto
{
    public class JobDetailsDto
    {
        public int Id { get; set; }

        public string Status { get; set; }

        public string Suburb { get; set; }

        public string Category { get; set; }

        public string Contact_name { get; set; }

        public string Contact_phone { get; set; }

        public string Contact_email { get; set; }

        public int Price { get; set; }

        public string Description { get; set; }

        public DateTime Created_at { get; set; }

        public string PostCode { get; set; }
    }
}
