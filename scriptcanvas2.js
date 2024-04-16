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
        //console.log(distance);
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
    
    var last_time, linear_speed, angle, lastend;
    var myTotal = 0;
    var data = Array(100, 30, 90, 250);
    var Color = [grad1,grad2,grad3,grad4];
    for (var e = 0; e < data.length; e++) {
        myTotal += data[e];
    }
    //Inicjalizacja stanu początkowego animacji
    function InitAnimation(){
        var date = new Date();
        last_time = date.getTime();
        //Inicjalizacja zmiennych opisujących animację
        linear_speed = 0.0005;
        angle = 0;
        //Uruchomienie animacji
        window.requestAnimationFrame(drawAnimation);
    }
    //właściwa funkcja rysująca kolejne klatki animacji
    function drawAnimation(){
        // 2. czyszczenie płótna
        ctx.clearRect(0,0,500,500);
        //ctx.globalCompositeOperation ="destination-over";
        // 3. wyznaczenie upływu czasu od ostatniej klatki
        var date = new Date();
        var time_interval = date.getTime() - last_time;
        last_time = date.getTime();
        
        // 3.1. Wyznaczenie nowego stanu rysowanych obiektów
        angle += time_interval * linear_speed;
        //console.log(angle);
        // 4. Rysowanie obiektów
        // 4.1. zapamiętanie stanu płótna
        ctx.save();
        // 4.2 Rysowanie obiektów
        lastend = 0;
        ctx.arc(100, 100, 10, 0, 2 * Math.PI);
        for (var i = 0; i < data.length; i++) {
            ctx.fillStyle = Color[i];
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.arc(
                canvas.width / 2,  // x
                canvas.height / 2, // y
                canvas.height / 2 , // radius
                lastend,           // startingAngle (radians)
                lastend + Math.PI * 2 * (data[i] / myTotal), // endingAngle (radians)
                false // antiClockwise (boolean)
            );
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            ctx.fill();

            lastend += Math.PI * 2 * (data[i] / myTotal);
            //console.log(lastend);
        }
        

        ctx.globalCompositeOperation ="destination-in";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.arc(
                canvas.width / 2,  // x
                canvas.height / 2, // y
                canvas.height / 2, // radius
                0,           // startingAngle (radians)
                Math.PI * 2 * (angle), // endingAngle (radians)
                false // antiClockwise (boolean)
            );
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            ctx.fill();
        ctx.closePath();
        ctx.restore();
        

        // 5. ponowne wywołanie pętli animacji
        if (angle<1) window.requestAnimationFrame(drawAnimation);
    }
    InitAnimation();
}

function canvas5(){
    let canvas = document.getElementById("canvas5");
    let context = canvas.getContext("2d");

    var dane_wykresu = {
        serie: [[10, 30, 45, 24, 79], [24, 15, 33, 34, 50]],
        etykiety: ["label1", "label2", "label3", "label4", "label5",],
        tytul: "Animowany wykres slupkowy",
        type: "wykres_slupkowy"
    };

    var kolory = ["#5dc61b","#1b77c6","#c31de0","#0eb5b5","#e01d4a"];

    //Deklaracja zmiennych podlegających zmianie podczas całej animacji
    var last_time, stan, linear_speed;
    var pad = 25;
    var pad2 = pad + 5;
    var wid = 20;
    var seriepad = 100;
    var maxvalue = 0;
    dane_wykresu.serie.forEach(seria => {
        seria.forEach(element => {
            if(element>maxvalue) maxvalue = element;
        })        
    });
    
    //Inicjalizacja stanu początkowego animacji
    function InitAnimation(){
        var date = new Date();
        last_time = date.getTime();
        //Inicjalizacja zmiennych opisujących animację
        linear_speed = 0.001;
        stan = 0; 
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
        stan += time_interval * linear_speed;
        console.log(stan);
        // 4. Rysowanie obiektów
        // 4.1. zapamiętanie stanu płótna
        context.save();
        // 4.2 Rysowanie obiektów
        if(dane_wykresu.type = "wykres_slupkowy"){
            context.font = "20px Arial";
            context.fillText(dane_wykresu.tytul,120,20);
            context.font = "14px Arial";
            //linie
            for(var i = 0; i <=5; i++){
                context.lineWidth = 1;
                context.beginPath();
                context.moveTo(0,(canvas.height-30)-((canvas.height-30)*i/4)*0.9);
                context.lineTo(canvas.width,(canvas.height-30)-((canvas.height-30)*i/4)*0.9);
                context.stroke();
                context.fillText(maxvalue*(i/4),0,(canvas.height-30)-((canvas.height-30)*i/4)*0.9 - 2);
            }
            context.font = "18px Arial";
            for(var i = 0; i<dane_wykresu.serie[0].length; i++){
                //pierwszy element serii
                context.fillStyle=kolory[i];
                context.fillText(dane_wykresu.etykiety[i],pad+i*seriepad,canvas.height-5,wid+pad2);
                context.beginPath();
                context.moveTo(pad+i*seriepad,(canvas.height - 30));
                context.lineTo(pad+wid+i*seriepad,(canvas.height - 30));
                context.lineTo(pad+wid+i*seriepad,((canvas.height - 30) - 0.9 * (canvas.height - 30) * (dane_wykresu.serie[0][i]/maxvalue)) + 0.9 * (((canvas.height - 30)-((canvas.height - 30) - (canvas.height - 30) * (dane_wykresu.serie[0][i]/maxvalue)))*(1-stan)));
                context.lineTo(pad+i*seriepad,((canvas.height - 30) - 0.9 * (canvas.height - 30) * (dane_wykresu.serie[0][i]/maxvalue)) + 0.9 * (((canvas.height - 30)-((canvas.height - 30) - (canvas.height - 30) * (dane_wykresu.serie[0][i]/maxvalue)))*(1-stan)));
                context.fill();

                //drugi element serii
                context.beginPath();
                context.moveTo(pad2+wid+i*seriepad,(canvas.height - 30));
                context.lineTo(pad2+2*wid+i*seriepad,(canvas.height - 30));
                context.lineTo(pad2+2*wid+i*seriepad,((canvas.height - 30) - 0.9 * (canvas.height - 30) * (dane_wykresu.serie[1][i]/maxvalue)) + 0.9 * (((canvas.height - 30)-((canvas.height - 30) - (canvas.height - 30) * (dane_wykresu.serie[1][i]/maxvalue)))*(1-stan)));
                context.lineTo(pad2+wid+i*seriepad,((canvas.height - 30) - 0.9 * (canvas.height - 30) * (dane_wykresu.serie[1][i]/maxvalue)) + 0.9 * (((canvas.height - 30)-((canvas.height - 30) - (canvas.height - 30) * (dane_wykresu.serie[1][i]/maxvalue)))*(1-stan)));
                context.fill();
                
            }
        }
        context.restore();
        // 5. ponowne wywołanie pętli animacji
        if (stan<1) window.requestAnimationFrame(drawAnimation);
    }
    InitAnimation();
}