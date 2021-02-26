/**
 * 
 *  This model class has been created for mapping categories table
 * 
 */


namespace hipagesapi.Models
{
    public class Categories
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Parent_category_id { get; set; }
    }
}
