using Dnguyen_SPA.Json;
using Dnguyen_SPA.POCOs;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using Dnguyen_SPA.Models;

namespace Dnguyen_SPA.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public ActionResult Index()
        {
            var model = new IndexViewModel();

            model.Categories = GetAllCategories();
            model.Articles = GetAllArticles();
            model.FeaturedArticles = GetFeaturedArticles();
            model.Banners = GetAllBanners();

            return View(model);
        }

        private List<Category> GetAllCategories()
        {
            var service = new ArticlesService();
            var jsonResponse = service.GetAllCategories();
            return PocoJsonSerializer.BuildListOfPocosFromJson<Category>(jsonResponse);
        }

        private List<Article> GetAllArticles()
        {
            var service = new ArticlesService();
            var jsonResponse = service.GetAllArticles();
            return PocoJsonSerializer.BuildListOfPocosFromJson<Article>(jsonResponse);
        }

        private List<Featured> GetFeaturedArticles()
        {
            var service = new ArticlesService();
            var jsonResponse = service.GetAllArticles();
            return PocoJsonSerializer.BuildListOfPocosFromJson<Featured>(jsonResponse);
        }

        private List<Banner> GetAllBanners()
        {
            var service = new ArticlesService();
            var jsonResponse = service.GetAllBanners();
            return PocoJsonSerializer.BuildListOfPocosFromJson<Banner>(jsonResponse);
        }
	}
}