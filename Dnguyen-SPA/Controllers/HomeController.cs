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
           return View();
        }
	}
}