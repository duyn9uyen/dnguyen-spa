using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public static class EndPoints
    {
        public const string GetAllCategories = "http://html5news.herokuapp.com/articles/categories";
        public const string GetAllBanners = "http://html5news.herokuapp.com/banners";
        public const string GetAllArticles = "http://html5news.herokuapp.com/articles/all";
        public const string GetFeaturedArticles = "http://html5news.herokuapp.com/articles/featured";
        
        public const string GetArticleById = "http://html5news.herokuapp.com/articles/{0}";
        public const string GetArticlesByCategoryId = "http://html5news.herokuapp.com/category/{0}";
    }
}
