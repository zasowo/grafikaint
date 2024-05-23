using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataChartSources
{
    public class DataChartSource2 : IDataChartSource
    {
        public DataChartSource2(double start, double stop, int N)
        {
            XValues = new List<double>();

            double krok = (stop - start) / N;
            for (double i = start; i < stop; i += krok)
            {
                XValues.Add(i);
            }
        }
        public double F(double x, int D = 1)
        {
            double yy = 0;
            for(int i = 0; i<D; i++)
            {
                yy += (x * x) - 10 * Math.Cos(2 * Math.PI * x) + 10;
            }
            return yy;
        }
        public List<double> XValues { get; set; }
        public List<double> GetX() { return XValues; }
        public List<double> GetY()
        {
            return new List<double>(GetX().Select(x => F(x)));
        }
        public List<string> GetXSF() { return new List<string>(GetX().Select(x => x.ToString())); }

    }
}
