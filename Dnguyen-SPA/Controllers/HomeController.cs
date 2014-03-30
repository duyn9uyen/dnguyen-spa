using Dnguyen_SPA.Json;
using Dnguyen_SPA.Models;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace Dnguyen_SPA.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public ActionResult Index()
        {
            var service = new ArticlesService();
            var jsonResponse = service.GetAllCategories();

            var category = PocoJsonSerializer.BuildListOfPocosFromJson<Category>(jsonResponse);

            return View();
        }
	}
}