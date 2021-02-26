using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hipagesapi.Models
{
    public class Categories
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Parent_category_id { get; set; }
    }
}
