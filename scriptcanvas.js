function canvas(){
    canvas1();
    canvas2();
    canvas3();
    canvas4();
}

function canvas1(){
    let wysokosc = 200;
    let szerokosc = 40;

    let canvas = document.getElementById("canvas1");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(0,wysokosc*2);
    for(let i = 0; i < canvas.width/szerokosc +1; i++){
        context.lineTo(i*szerokosc,(i%2==0) ? 0 : wysokosc*2);
        context.lineTo((i+1)*szerokosc, (i%2==0) ? 0 : wysokosc*2);
    }

    context.stroke();
}

function canvas2(){
    var data = Array(100, 30, 90, 250);
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");

    var lastend = 0;
    var myTotal = 0;

    const grad1=ctx.createLinearGradient(0,0, 300,0);
    grad1.addColorStop(0, "lightblue");
    grad1.addColorStop(1, "darkblue");

    const grad2=ctx.createLinearGradient(0,0, 300,0);
    grad2.addColorStop(0, "lightgreen");
    grad2.addColorStop(1, "darkgreen");

    const grad3=ctx.createLinearGradient(0,0, 300,0);
    grad3.addColorStop(0, "lightcoral");
    grad3.addColorStop(1, "darkred");

    const grad4=ctx.createLinearGradient(0,0, 300,0);
    grad4.addColorStop(0, "lightgray");
    grad4.addColorStop(1, "black");
    
    var Color = [grad1,grad2,grad3,grad4];

    for (var e = 0; e < data.length; e++) {
        myTotal += data[e];
    }

    for (var i = 0; i < data.length; i++) {
        ctx.fillStyle = Color[i];
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
            canvas.width / 2,  // x
            canvas.height / 2, // y
            canvas.height / 2, // radius
            lastend,           // startingAngle (radians)
            lastend + Math.PI * 2 * (data[i] / myTotal), // endingAngle (radians)
            false // antiClockwise (boolean)
        );
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.fill();
        lastend += Math.PI * 2 * (data[i] / myTotal);
    }
}

function canvas3(){
    let canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(100,50);
    ctx.arcTo(canvas.width-50, 50, canvas.width-50, 100, 20);
    ctx.arcTo(canvas.width-50, canvas.height-50, canvas.width-100, canvas.height-50, 20);
    ctx.arcTo(50, canvas.height-50, 50, canvas.height - 100, 20);
    ctx.arcTo(50,50,100,50,20);
    ctx.lineTo(100,50);
    ctx.fill();
}

function canvas4(){
    let canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");

    
}