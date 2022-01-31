using System;
namespace website.Models.PageTemplate
{
    public interface IPageTemplate
    {
      
        public string id { get; set; }

        public string block_name { get; set; }

        public string title { get; set; }

    }
}
