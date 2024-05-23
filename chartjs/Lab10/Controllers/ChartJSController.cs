using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using DataChartSources;
using Chart.Mvc.ComplexChart;


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
            ViewBag.SourceX = JsonConvert.SerializeObject(source.GetX());
            ViewBag.SourceY = JsonConvert.SerializeObject(source.GetY());
            ViewBag.SourceLabels = JsonConvert.SerializeObject(source.GetXSF());
            return View();
        }
        public IActionResult Funkcja2()
        {
            DataChartSource2 source = new DataChartSource2(-5, 5, 1000);
            ViewBag.SourceX = JsonConvert.SerializeObject(source.GetX());
            ViewBag.SourceY = JsonConvert.SerializeObject(source.GetY());
            ViewBag.SourceLabels = JsonConvert.SerializeObject(source.GetXSF());
            return View();
        }
        public IActionResult BarChart() {

            return View();
        }
        public IActionResult PieChart() {
            return View();
        }
        public IActionResult MixedChart() {
            return View();
        }
        public IActionResult ChartMVCBarChart() {
            var barChart = new BarChart();
            barChart.ComplexData.Labels.AddRange(new List<string>() { "dane1", "dane2", "dane3", "dane4", "dane5" });
            barChart.ComplexData.Datasets.AddRange(new List<ComplexDataset>
                {new ComplexDataset
                    {
                    Data = [4,3,2,5,5],
                    Label = "set1",
                    FillColor = "rgba(220,220,220,0.2)",
                    StrokeColor = "rgba(220,220,220,1)",
                    PointColor = "rgba(220,220,220,1)",
                    PointStrokeColor = "#fff",
                    PointHighlightFill = "#fff",
                    PointHighlightStroke = "rgba(220,220,220,1)",
                    },
                new ComplexDataset
                    {
                    Data = [3,3,4,4,5],
                    Label = "set2",
                    FillColor = "rgba(151,187,205,0.2)",
                    StrokeColor = "rgba(151,187,205,1)",
                    PointColor = "rgba(151,187,205,1)",
                    PointStrokeColor = "#fff",
                    PointHighlightFill = "#fff",
                    PointHighlightStroke = "rgba(151,187,205,1)",
                    }
                });
            ViewBag.Chart = barChart;
            return View();
        }
        public IActionResult ChartMVCPieChart() {
            return View();
        }
    }
}
