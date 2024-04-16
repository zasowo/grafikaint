function canvas(){
    canvas1();
    canvas2();
    canvas3();
    canvas4();
    canvas5();
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
    
    //context.scale(10,10);
    var skala = 40;

    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    var y = fn1(x,c/skala)*skala;
    var N = 20000;
    context.moveTo(x,y);
    for (var i = 0; i < N; i++){
        context.lineTo(skala*x,y);
        x+=krok;
        y=fn1(x,c/skala)*skala;
    }

    context.stroke();
    context.closePath();
}

function canvas3(){
    let canvas = document.getElementById("canvas3");
    let context = canvas.getContext("2d");
    //Deklaracja zmiennych podlegających zmianie podczas całej animacji
    var last_time, stop, linear_speed, varX, varY, initX, initY, r;
    //Inicjalizacja stanu początkowego animacji
    function InitAnimation(){
        stop = false;
        var date = new Date();
        last_time = date.getTime();
        //Inicjalizacja zmiennych opisujących animację
        linear_speed = 100;
        stop = 0; 
        r=10;
        varX = Math.floor(Math.random() * (100)) + 2*r; varY = Math.floor(Math.random() * (100))+2*r; 
        initX = varX; initY = varY;
        flX = 1; flY = 1; 
        //Uruchomienie animacji
        window.requestAnimationFrame(drawAnimation);
    }
    //właściwa funkcja rysująca kolejne klatki animacji
    function drawAnimation(){
        // 2. czyszczenie płótna
        context.clearRect(0,0,500,500);
        // 3. wyznaczenie upływu czasu od ostatniej klatki
        var date = new Date();
        var time_interval = date.getTime() - last_time;
        last_time = date.getTime();
        
        // 3.1. Wyznaczenie nowego stanu rysowanych obiektów
        var distance = linear_speed * time_interval / 1000;
        console.log(distance);
        // 4. Rysowanie obiektów
        // 4.1. zapamiętanie stanu płótna
        context.save();
        context.beginPath();
        // 4.2 Rysowanie obiektów
        context.arc(initX, initY, r, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();
        context.closePath();
        context.restore();
        
        varX += distance*flX; varY += distance*flY;
        if(varX>canvas.width-r){
            flX = -1;
        }
        if(varY>canvas.height-r){
            flY = -1;
        }
        if(varX<r){
            flX = 1;
        }
        if(varY<r){
            flY = 1;
        }
        context.translate(distance*flX,distance*flY);
        // 5. ponowne wywołanie pętli animacji
        if (!stop) window.requestAnimationFrame(drawAnimation);
    }
    InitAnimation();
}

function canvas4(){
    let canvas = document.getElementById("canvas4");
    let ctx = canvas.getContext("2d");
}

function canvas5(){
    let canvas = document.getElementById("canvas5");
    let ctx = canvas.getContext("2d");
}