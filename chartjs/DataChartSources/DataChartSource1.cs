using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataChartSources
{
    public class DataChartSource1 : IDataChartSource
    {
        // f(x) = sin(5*x) + cos(3*x)   x = [-5,5]
        public DataChartSource1(double start, double stop, int N)
        {
            XValues = new List<double>();

            double krok = (stop - start)/N;
            for (double i = -start; i <= stop; i += krok)
            {
                XValues.Add(i);
            }
        }
        public double F(double x, int D = 1)
        {
            return Math.Sin(5*x) + Math.Cos(3*x);
        }
        public List<double> XValues { get; }
        public List<double> GetX() { return XValues; }
        public List<double> GetY()
        {
            return new List<double>(GetX().Select(x => F(x)));
        }
        public List<string> GetXSF() { return new List<string>(GetX().Select(x => x.ToString())); }

    }
}
