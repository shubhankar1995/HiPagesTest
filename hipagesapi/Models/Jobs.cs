using System;

/**
 * 
 *  This model class has been created for mapping jobs table
 * 
 */


namespace hipagesapi.Models
{
    public class Jobs
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
