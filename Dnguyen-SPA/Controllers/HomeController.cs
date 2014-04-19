using System.Web.Mvc;

namespace Dnguyen_SPA.Controllers
{
    public class HomeController : Controller
    {
        //check out routers/routers.js for the entry point in the application.
        public ActionResult Index()
        {
           return View();
        }
	}
}