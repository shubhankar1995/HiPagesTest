using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public DateTime Updated_at { get; set; }

        public string PostCode { get; set; }
    }
}
