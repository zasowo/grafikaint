using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using DataChartSources;


namespace Lab10.Controllers
{
    public class ChartJSController : Controller
    {
        public Random random;

        public ChartJSController()
        {
            random = new Random();
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Funkcja1()
        {
            DataChartSource1 source = new DataChartSource1(-5,5,1000);
            ViewBag.Source = source;
            return View();
        }
        public IActionResult Funkcja2()
        {
            DataChartSource2 source = new DataChartSource2(-5, 5, 1000);
            ViewBag.Source = source;
            return View();
        }
    }
}
