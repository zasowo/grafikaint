function canvas(){
    canvas1();
    canvas2();
    canvas3();
    canvas4();
    canvas5();
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
    let canvas = document.getElementById("canvas4");
    let context = canvas.getContext("2d");

    var koloZ = { x: canvas.width/2, y: canvas.height/2, r1:canvas.width/2 - 25, r2:canvas.height/2 - 75 };
    var ile = 52; //liczba zębów
    var r = koloZ.r1;
    context.beginPath();
    context.fillStyle = "blue";
    context.strokeStyle = "black";
    for (var i = 0; i < ile; i++) {
        var alpha = ((Math.PI * 2) / ile) * (i); //aktualny kąt
        if (i % 2 == 0) {
        if (r == koloZ.r1)
        r = koloZ.r2;
        else
        r = koloZ.r1;
        }
        var x = (r * Math.sin(alpha)) + koloZ.x;
        var y = (r * Math.cos(alpha)) + koloZ.y;
        if (i == 0)
        context.moveTo(x, y);
        else
        context.lineTo(x, y);
    }
    context.fill();
    context.stroke();
    context.closePath();

    context.globalCompositeOperation ="destination-out";
    for (var i = 0; i < 5; i++){
        context.beginPath();
        var alpha = ((Math.PI * 2)/5) * (i); //aktualny kąt
        var x = (r/2 * Math.sin(alpha)) + koloZ.x;
        var y = (r/2 * Math.cos(alpha)) + koloZ.y;
        context.strokeStyle = 'blue';
        context.arc(x, y, r/8, 0, 2 * Math.PI);
        context.fillStyle = 'green';
        context.fill();
        context.stroke();
        context.closePath();
    }

}