function funkcja1(x, D=1){
    let y = 0;
    for (let i = 0; i<D; i++){
        y += x*x - 10*Math.cos(2*Math.PI*x) + 10;
    }
    return y;
}

function funkcja2a(x, D=2){

}

function funkcja2b(x, D=2){

}

function canvas(){
    $(document).ready(function(){
        var cosPoints = []; 
        for (var i=0; i<2*Math.PI; i+=0.1){ 
           cosPoints.push([i, Math.cos(i)]); 
        } 
        var plot3 = $.jqplot('chart1', [cosPoints], {  
            series:[{showMarker:false}],
            axes:{
              xaxis:{
                label:'Angle (radians)',
                labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                labelOptions: {
                  fontFamily: 'Georgia, Serif',
                  fontSize: '12pt'
                }
              },
              yaxis:{
                label:'Cosine',
                labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                labelOptions: {
                  fontFamily: 'Georgia, Serif',
                  fontSize: '12pt'
                }
              }
            }
        });
      });
}