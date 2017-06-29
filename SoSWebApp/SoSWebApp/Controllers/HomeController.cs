using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SoSWebApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Hello
        public ActionResult Index()
        {
            return View();
        }
    }
}