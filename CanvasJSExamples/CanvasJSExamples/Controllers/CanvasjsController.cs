using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CanvasJSExamples.Models;
using Newtonsoft.Json;  //Do serializacji danych 

namespace CanvasJSExamples.Controllers
{
    public class CanvasjsController : Controller
    {
        //Generator liczb losowych
        public Random random;
        
        public CanvasjsController()
        {
            random = new Random();
        }


        // Defalut plot for ploting linear chart using Canvasjs library 
        // GET: Canvasjs
        public ActionResult Index()
        {
            double N = 10000; //liczba punktów
            double y = 100; //wartość dla osi OY
            //Dane do rysowania wykresu liniowego (losowe)

            List<DataPoint> dataPoints = new List<DataPoint>();

            for(int i=0;i<N;i++)
            {
                y += random.Next(-20, 20);
                dataPoints.Add(new DataPoint(i, y));
            }

            //Zwrócenie danych do widoku Indeks w celu narysowania przy użyciu Canvasjs
            ViewBag.DataPoints = JsonConvert.SerializeObject(dataPoints);

            //Zwrócenie widoku
            return View();
        }

        public ActionResult Funkcja1(){
            double start = -5; //liczba punktów
            double notstart = 5;
            double y = 0; //wartość dla osi OY
            //Dane do rysowania wykresu liniowego (losowe)

            List<DataPoint> dataPoints = new List<DataPoint>();

            for (double i = start; i <= notstart; i+= 0.01) {
                y = Math.Sin(5*i) + Math.Cos(3*i);
                dataPoints.Add(new DataPoint(i, y));
            }

            //Zwrócenie danych do widoku Indeks w celu narysowania przy użyciu Canvasjs
            ViewBag.DataPoints = JsonConvert.SerializeObject(dataPoints);

            //Zwrócenie widoku
            return View();
        }

        public ActionResult Funkcja2() {
            double start = -5; //liczba punktów
            double notstart = 5;
            double y = 0; //wartość dla osi OY
            int D = 1;
            //Dane do rysowania wykresu liniowego (losowe)

            List<DataPoint> dataPoints = new List<DataPoint>();
            for (double i = start; i <= notstart; i += 0.01) {
                y = 0;
                for (int j = 0; j < D; j++) {
                    y += i*i - 10 * Math.Cos(2*Math.PI*i) + 10;
                }
                dataPoints.Add(new DataPoint(i, y));
            }
            //Zwrócenie danych do widoku Indeks w celu narysowania przy użyciu Canvasjs
            ViewBag.DataPoints = JsonConvert.SerializeObject(dataPoints);

            //Zwrócenie widoku
            return View();
        }
        public ActionResult Slupkowy() {
            double N = 5; //liczba grup

            //Dane (losowe)

            List<LabelData> dataBarsRed = new List<LabelData>();
            List<LabelData> dataBarsGreen = new List<LabelData>();
            List<LabelData> dataBarsBlue = new List<LabelData>();

            string nazwa = "";
            for (int i = 0; i < N; i++) {
                nazwa = $"dane{i}";
                dataBarsRed.Add(new LabelData(random.Next(1, 20), nazwa));
                dataBarsGreen.Add(new LabelData(random.Next(1, 20), nazwa));
                dataBarsBlue.Add(new LabelData(random.Next(1, 20), nazwa));
            }

            //Zwrócenie danych do widoku Indeks w celu narysowania przy użyciu Canvasjs
            ViewBag.DataBarsRed = JsonConvert.SerializeObject(dataBarsRed);
            ViewBag.DataBarsGreen = JsonConvert.SerializeObject(dataBarsGreen);
            ViewBag.DataBarsBlue = JsonConvert.SerializeObject(dataBarsBlue);

            //Zwrócenie widoku
            return View();
        }
        public ActionResult Kolowy() {
            double N = 5; //liczba segmentów

            //Dane (losowe)

            List<LabelData> pieData = new List<LabelData>();
            List<int> ints = new List<int>();
            string nazwa = "";
            for (int i = 0; i < N; i++) {
                ints.Add(random.Next(1, 100));
            }
            int sum = ints.Sum();

            for (int i = 0; i < N; i++) {
                nazwa = $"dane{i}";
                pieData.Add(new LabelData((double)ints[i] / sum * 100, nazwa));
            }

            //Zwrócenie danych do widoku Indeks w celu narysowania przy użyciu Canvasjs
            ViewBag.PieData = JsonConvert.SerializeObject(pieData);

            //Zwrócenie widoku
            return View();
        }
        public ActionResult Kombinowany() {
            double N = 12;
            //Dane do rysowania wykresu liniowego (losowe)

            List<DateData> dateData1 = new List<DateData>();
            List<DateData> dateData2 = new List<DateData>();
            List<DateData> dateData3 = new List<DateData>();

            for (int i = 0; i < N; i++) {
                dateData1.Add(new DateData(new DateTime(2024, i+1, i+1).ToShortDateString(), random.Next(1, 40000)));
                dateData2.Add(new DateData(new DateTime(2024, i+1, i+1).ToShortDateString(), random.Next(1, 10000)));
                dateData3.Add(new DateData(new DateTime(2024, i+1, i+1).ToShortDateString(), (double)(dateData1[i].Y - dateData2[i].Y)));
            }

            //Zwrócenie danych do widoku Indeks w celu narysowania przy użyciu Canvasjs
            ViewBag.DateData1 = JsonConvert.SerializeObject(dateData1);
            ViewBag.DateData2 = JsonConvert.SerializeObject(dateData2);
            ViewBag.DateData3 = JsonConvert.SerializeObject(dateData3);

            //Zwrócenie widoku
            return View();
        }
    }
}