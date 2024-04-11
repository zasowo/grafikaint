function canvas(){
    canvas1();
    canvas2();
    canvas3();
    canvas4();
}

function canvas1(){
    let canvas = document.getElementById("canvas1");
    let context = canvas.getContext("2d");

    function fn1(x,c){
        // y = sin(x) + 0.5*x - c
        return Math.sin(x) + 0.5*x - c
    }

    var x = -1000;
    var c = 5;
    var krok = 0.1;
    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(canvas.width/2,canvas.height);
    context.lineTo(canvas.width/2,0);
    context.lineTo(canvas.width*0.48,canvas.height*0.02);
    context.lineTo(canvas.width*0.52,canvas.height*0.02);
    context.lineTo(canvas.width/2,0);
    context.fillStyle = "red";
    context.stroke();
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(0,canvas.height/2);
    context.lineTo(canvas.width,canvas.height/2);
    context.lineTo(canvas.width*0.98, canvas.height*0.52);
    context.lineTo(canvas.width*0.98, canvas.height*0.48);
    context.lineTo(canvas.width,canvas.height/2);
    context.stroke();
    context.fill()
    context.closePath();

    context.transform(1, 0, 0, -1, 0, canvas.height);
    context.translate(canvas.width/2, canvas.height/2);
    context.scale(10,10);
    

    context.beginPath();
    context.lineWidth = 0.3;
    context.strokeStyle = "black";
    var y = fn1(x,c);
    var N = 20000;
    context.moveTo(x,y);
    for (var i = 0; i < N; i++){
        context.lineTo(x,y);
        x+=krok;
        y=fn1(x,c);
    }

    context.stroke();
    context.closePath();
}

function canvas2(){
    let canvas = document.getElementById("canvas2");
    let context = canvas.getContext("2d");

    function fn1(x,c){
        // y = sin(2x) * cos(3x) + 0.5*x - c
        return Math.sin(2*x) * Math.cos(3*x) + 0.5*x - c;
    }

    var x = -1000;
    var c = 0;
    var krok = 0.1;
    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(canvas.width/2,canvas.height);
    context.lineTo(canvas.width/2,0);
    context.lineTo(canvas.width*0.48,canvas.height*0.02);
    context.lineTo(canvas.width*0.52,canvas.height*0.02);
    context.lineTo(canvas.width/2,0);
    context.fillStyle = "red";
    context.stroke();
    context.fill();
    context.closePath();
    context.beginPath();
    context.moveTo(0,canvas.height/2);
    context.lineTo(canvas.width,canvas.height/2);
    context.lineTo(canvas.width*0.98, canvas.height*0.52);
    context.lineTo(canvas.width*0.98, canvas.height*0.48);
    context.lineTo(canvas.width,canvas.height/2);
    context.stroke();
    context.fill()
    context.closePath();

    context.transform(1, 0, 0, -1, 0, canvas.height);
    context.translate(canvas.width/2, canvas.height/2);
    
    //context.scale(10,10);
    var skala = 10;

    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    var y = fn1(x,c)*skala;
    var N = 20000;
    context.moveTo(x,y);
    for (var i = 0; i < N; i++){
        context.lineTo(skala*x,y);
        x+=krok;
        y=fn1(x,c)*skala;
    }

    context.stroke();
    context.closePath();
}

function canvas3(){
    let canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
}

function canvas4(){
    let canvas = document.getElementById("canvas4");
    let ctx = canvas.getContext("2d");
}