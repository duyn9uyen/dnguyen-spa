using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dnguyen_SPA.POCOs
{
    public class Featured
    {
        public List<Aside> aside { get; set; }
        public List<Main> main { get; set; }
        public List<Opinion> opinion { get; set; }
        public List<Travel> travel { get; set; }
    }

    public class Aside
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

    public class Main
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

    public class Opinion
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

    public class Travel
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