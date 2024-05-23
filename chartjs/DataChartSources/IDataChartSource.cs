using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataChartSources
{
    public interface IDataChartSource
    {
        List<double> XValues { get;}
        double F(double x, int D=1);

        List<double> GetX();
        List<double> GetY();
        List<string> GetXSF();

    }
}
