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
  var x = [];
  var y = [];
  var z = [];
  fetch("https://raw.githubusercontent.com/zasowo/grafikaint/main/wykresy/csv.csv")
  .then((res) => res.text())
  .then((text) => {
    var lines = text.split('\n');
    var line = [];
    for (var i = 0; i<lines.length; i++){ 
      line = lines[i].split(',');
      y.push(parseFloat(line[0]));  
      x.push(parseFloat(line[1]));
      z.push(parseFloat(line[2]));
    }
    var data = [x,y,z];

    Plotly.newPlot('chart2b', [{
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
  })
  .catch((e) => console.error(e));
  chartIrys();
}

function chartIrys(){
  fetch("https://raw.githubusercontent.com/zasowo/grafikaint/main/wykresy/iris.csv")
  .then((res) => res.text())
  .then((text) => {
    var setosa0 = [];var setosa1 = [];var setosa2 = [];var setosa3 = [];var setosaSize = [];
    var versicolor0 = [];var versicolor1 = [];var versicolor2 = [];var versicolor3 = [];var versicolorSize = [];
    var virginica0 = [];var virginica1 = [];var virginica2 = [];var virginica3 = [];var virginicaSize = [];
    var lines = text.split('\n');
    var line = [];
    for (var i = 1; i<lines.length; i++){ 
      line = lines[i].split(',');
      console.log(line);
      if(line[4] == "\"Setosa\""){
        setosa0.push(parseFloat(line[0]));
        setosa1.push(parseFloat(line[1]));
        setosa2.push(parseFloat(line[2]));
        setosa3.push(parseFloat(line[3]));
        setosaSize.push(parseFloat(line[3])*8);
      } else if (line[4] == "\"Versicolor\"") {
        versicolor0.push(parseFloat(line[0]));
        versicolor1.push(parseFloat(line[1]));
        versicolor2.push(parseFloat(line[2]));
        versicolor3.push(parseFloat(line[3]));
        versicolorSize.push(parseFloat(line[3])*8);
      } else {
        virginica0.push(parseFloat(line[0]));
        virginica1.push(parseFloat(line[1]));
        virginica2.push(parseFloat(line[2]));
        virginica3.push(parseFloat(line[3]));
        virginicaSize.push(parseFloat(line[3])*8);
      }
    }

    var setosaPlot = {
      x: setosa0, y: setosa1, z: setosa2,
      text: setosa3,
      hovertemplate: 'sepal_length: %{x}' +
                  '<br>sepal_width: %{y}<br>' +
                  'petal_length: %{z}<br>'+
                  'petal_width: %{text}',

      mode: 'markers',
      color: 'red',
      marker : {
          size:  setosaSize,
          color: 'red',
          width: 0.5,
          opacity: 0.75,
      },
      type: 'scatter3d',
      name: 'setosa'
    };

    var versicolorPlot = {
      x: versicolor0, y: versicolor1, z: versicolor2,
      text: versicolor3,
      hovertemplate: 'sepal_length: %{x}' +
                  '<br>sepal_width: %{y}<br>' +
                  'petal_length: %{z}<br>'+
                  'petal_width: %{text}',

      mode: 'markers',
      color: 'green',
      marker : {
          size:  versicolorSize,
          color: 'green',
          width: 0.5,
          opacity: 0.75,
      },
      type: 'scatter3d',
      name: 'versicolor'
    };

    var virginicaPlot = {
      x: virginica0, y: virginica1, z: virginica2,
      text: virginica3,
      hovertemplate: 'sepal_length: %{x}' +
                  '<br>sepal_width: %{y}<br>' +
                  'petal_length: %{z}<br>'+
                  'petal_width: %{text}',

      mode: 'markers',
      color: 'blue',
      marker : {
          size:  virginicaSize,
          color: 'blue',
          width: 0.5,
          opacity: 0.75,
      },
      type: 'scatter3d',
      name: 'virginica'
    };

    data = [setosaPlot,versicolorPlot,virginicaPlot];

    var layout = {
      scene:{
       xaxis: {
         title:{
           text: "sepal_length",
         },
      },
       yaxis: {
          title:{
              text: "sepal_width",
            }
      },
       zaxis: {
          title:{
              text: "petal_length",
            }
      },
    }};

    Plotly.newPlot('chartiris',data,layout);
  });
}