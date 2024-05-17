function funkcja1(x, D=1){
    let y = 0;
    for (let i = 0; i<D; i++){
        y += x*x - 10*Math.cos(2*Math.PI*x) + 10;
    }
    return y;
}

function funkcja2a(D=2, start=-10, startnot=10){
  var x = [];
  var y = [];
  var z = [];

  for (var i = start; i<=startnot; i+=0.1){
      var a = 0.0;
      var b = 1.0;
      for(var j = 0; j<D; j++){
          a += (i*i)/4000;
          b *= Math.cos(i/Math.sqrt(Math.abs(i)));
      }
      y.push(a-b+1);
      x.push(i);
      z.push(i);
  }
  return [x,y,z];
}

function funkcja2b(D=2, start=-10, startnot=10){
  var x = [];
  var y = [];
  var z = [];  var csv = "";

  for (var i = start; i<=startnot; i+=0.1){
    var a = 0.0;
    var b = 1.0;
    for(var j = 0; j<D; j++){
        a += (i*i)/2000;
        b *= (Math.cos(2*i / Math.sqrt(Math.abs(i))));
    }
    y.push(a-b+1);
    x.push(i);
    z.push(i);
    csv += a-b+1+","+i+","+i+"\n";
  }
  console.log(csv);
  return [x,y,z];
}

function canvas(){
  var x = []; var y = [];
  for (i=-5;i<=5;i+=0.1){
    x.push(i);
    y.push(funkcja1(i));
  }

  var data = {
    "y" : {
       "data" : [
         y
       ],
       "smps" : x,
       "vars" : ['funkcja 1']
    }
 }
 var config = {
    "backgroundType":"panel",
    "blockContrast":"true",
    "evenColor":"rgb(226,236,248)",
    "graphOrientation":"vertical",
    "graphType":"Line",
    "legendInside":"true",
    "legendKeyBackgroundBorderColor":"rgba(255,255,255,0)",
    "legendKeyBackgroundColor":"rgba(255,255,255,0)",
    "legendPosition":"topLeft",
    "panelBackgroundColor":"rgb(226,236,248)",
    "smpTextRotate":"90",
    "smpTextScaleFontFactor": 0,
    "smpTitle":"x",
    "theme":"GGPlot",
    "title":"Funkcja 1",
    "xAxisTitle":"y"
  }
  var cX = new CanvasXpress("chart1", data, config)
  
  canvas2();
}

function canvas2(){
  var data = funkcja2a();

  Plotly.newPlot('chart2a', [{
    type: 'scatter3d',
    mode: 'lines',
    x: data[0],
    y: data[1],
    z: data[2],
    line: {
        width: 5,
        color: data[2],
        colorscale: "Viridis"},
    marker: {
        size: 4,
        color: data[2],
        colorscale: "Greens",
        cmin: -20,
        cmax: 50
    }},                  
    ]);

  canvas3();
}

function canvas3(){
  //var data = funkcja2b();
  fetch("wykresy/csv.csv")
  .then((res) => res.text())
  .then((text) => {
    console.log(text)
   })
  .catch((e) => console.error(e));
}