using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace CanvasJSExamples.Models {

    [DataContract]
    public class LabelData {
        //Constructor of the point
        public LabelData(double y, string label) {
            Y = y;
            Label = label;
        }

        [DataMember(Name = "y")]
        public Nullable<double> Y = null;

        [DataMember(Name = "label")]
        public string Label = null;

    }
}