using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace CanvasJSExamples.Models {

    [DataContract]
    public class DateData {
        //Constructor of the point
        public DateData(string x, double y) {
            Y = y;
            X = x;
        }

        [DataMember(Name = "y")]
        public Nullable<double> Y = null;

        [DataMember(Name = "x")]
        public string X = null;

    }
}