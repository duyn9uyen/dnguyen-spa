using Dnguyen_SPA.POCOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dnguyen_SPA.Models
{
    public class IndexViewModel
    {
        public List<Category> Categories { get; set; }
        public List<Article> Articles { get; set; }
        public List<Featured> FeaturedArticles { get; set; }
        public List<Banner> Banners { get; set; }
    }
}