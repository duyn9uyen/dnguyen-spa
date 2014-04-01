using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dnguyen_SPA.POCOs
{
    public class Article
    {
        public int id { get; set; }
        public string headLine { get; set; }
        public string snippet { get; set; }
        public string fullStory { get; set; }
        public string location { get; set; }
        public bool nsfw { get; set; }
        public int category { get; set; }
        public List<int> relatedArticleIds { get; set; }
        public bool hasVideoPlaceholder { get; set; }
        public int numberOfImages { get; set; }
    }
}