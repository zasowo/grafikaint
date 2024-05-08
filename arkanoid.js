function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function canvas(){
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");

    var stop = false;
    var drawGameOver = false;
    var last_time = 0;
    var ball = {}; //obiekt piłka
    var balls = [ball];
    var area = {}; //obiekt obszar poruszania
    var poziom = 0;
    var points = 0;
    var brick = {width: 48, height: 18,
        fillStyles: ["blue","green","yellow","red","black","pink","white","orange"],
        strokeStyle: "black"
    };
    var bricks=[[0, 7, 0, 7, 0, 0, 7, 0, 7, 0],
                [0, 6, 0, 0, 0, 0, 0, 0, 7, 0],
                [0, 3, 3, 0, 4, 5, 0, 3, 3, 0],
                [7, 0, 0, 3, 3, 3, 3, 0, 0, 7],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
                [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
                [0, 3, 2, 3, 2, 3, 2, 1, 3, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    function InitAnimation(){
        var date = new Date();
        last_time = date.getTime() + date.getMilliseconds() / 1000;
        //Ustawienie stanu początkowego płótna
        context.fillStyle = "white";
        context.strokeStyle = "black";
        //Ustalenie stanu początkowego piłki
        balls[0] = { x: 250, y: 300, r: 10, vx: 100, vy: -150 };
        //vx oraz vx – to oczywiście początkowa prędkość oraz kierunek ruchu piłki
        area = { x: 0, y: 0, width: 500, height: 500 };

        plate = { x: area.width / 2.0, y: area.height - 20, width: 100, height: 7, vx:0, vy:0, fillStyle: "green", strokeStyle: "black" };

        document.onkeydown = ("keydown", function(evt) {
            switch (evt.keyCode) {
                case 37:
                    plate.vx = -300;
                    break;
                    
                case 39:
                    plate.vx = 300;
                    break;
                    
            }
        });
        
        document.onkeyup = ("keyup", function(evt) {
            switch (evt.keyCode) {
                case 37:
                    plate.vx = 0;
                    break;
                    
                case 39:
                    plate.vx = 0;
                    break;
                    
            }
        });


        window.requestAnimationFrame(drawAnimation);
    }
    function randomBricks(){
        bricks = [[0, getRandomInt(8), 0, 0, 0, 0, 0, 0, 0, 0],
        [getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(8), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4)],
        [getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(8), getRandomInt(4)],
        [getRandomInt(8), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4)],
        [getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(8), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4)],
        [getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(8), getRandomInt(4), getRandomInt(4), getRandomInt(4)],
        [getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(8), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4)],
        [getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(8), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4)],
        [getRandomInt(4), getRandomInt(4), getRandomInt(8), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4)],
        [getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(4), getRandomInt(8), getRandomInt(4), getRandomInt(4)]];
        return bricks;
    }
    function drawAnimation(){

        if(!drawGameOver){
            // 3. czyszczenie płótna
            context.clearRect(0, 0, 500, 500);
            // 3. wyznaczenie upływu czasu od ostatniej klatki
            var date = new Date();
            var currentTime = date.getTime();
            var time_interval = currentTime - last_time;
            // Zapamiętanie ostatniego czasu animacji
            last_time = currentTime;
            // 3.1. Wyznaczenie nowego stanu rysowanych obiektów
            // Wyznaczenie przesunięcia paletki
            var pdx = plate.vx * time_interval / 1000;
            // Poruszanie paletki (sprawdzenie warunków granicznych)
            // Tym razem poruszanie w prawo i w lewo
            if ( plate.x + pdx >= area.x && plate.x + pdx + plate.width <= area.width) {
            // To poruszaj
            plate.x += pdx;
            }else{
            plate.vx = 0; // zatrzymanie paletki
            }

            // Wyznaczenie przesunięcia piłki (dx, dy)
            var cn = 0;
            balls.forEach(ball => {
                var dx = ball.vx * time_interval / 1000; //1000 – time_interval - [ms]
                var dy = ball.vy * time_interval / 1000;
                if (ball.x + dx + ball.r >= area.width| ball.x - ball.r + dx <= 0){
                    //Zmiana kierunku i odbicie
                    ball.vx = -ball.vx;
                    //Ponowne wyznaczenie przemieszczenia
                    dx = ball.vx * time_interval / 1000;
                }
                
                ball.x += dx; //Poruszanie
                
                if (ball.y + dy + ball.r >= area.height | ball.y - ball.r + dy <= 0){
                    //Zmiana kierunku i odbicie
                    ball.vy = -ball.vy;
                    dy = ball.vy * time_interval / 1000;
                }
                
                ball.y += dy;

                if (ball.y + ball.r >= plate.y){ //odbicie piłki od paletki
                    if (ball.x >= plate.x && ball.x <= plate.x + plate.width){ //odbicie
                        plate_center = plate.x + plate.width/2.0;
                        ball.vx = ball.vx - 4*(plate_center - ball.x); //zmiana kąta odbicia
                        ball.vy = -ball.vy; //odbicie po osi OY
                    }else{
                        balls.splice(cn,1);
                        if (balls.length <1){
                            drawGameOver = true; //koniec gry
                        }
                    }
                }
                //Detekcja kolizji z cegiełką
            for (var i = 0; i < 10; i++){ //po szerokości okna
                for (var j = 0; j < 10; j++){ //po wysokości
                    if (bricks[j][i] > 0){ //to detekcja kolizji
                         //wyznaczenie położenia każdej cegły
                         var brick_coords = {x: (i*(brick.width+2)), y: (j*(brick.height+2))};
                        
                         //sprawdzenie warunków kolizji
                         if (brick_coords.x < ball.x+ball.r-2 && ball.x-ball.r-2 < brick_coords.x+brick.width && brick_coords.y < ball.y+ball.r-2 && ball.y-ball.r-2 < brick_coords.y+brick.height){    
                             ball.vy = -ball.vy;
                             points += 10 * (poziom+1);
                             if(bricks[j][i]<4){
                                 bricks[j][i] = bricks[j][i] - 1;
                             } else {
                                 switch (bricks[j][i]){
                                     case 4:
                                         bricks[j][i] = 0;
                                         points += 100 * (poziom+1);
                                         break;
                                     case 5:
                                         plate.width += 30;
                                         bricks[j][i] = 0;
                                         break;
                                     case 6:
                                         plate.width -= 30;
                                         bricks[j][i] = 0;
                                         break;
                                     case 7:
                                        var newball = { x: 250, y: 300, r: 10, vx: 100, vy: -150 };
                                        balls.push(newball);
                                         bricks[j][i] = 0;
                                         break;
                                 }
                             }
                             if(bricks.reduce((partialSum, a)=> partialSum+a.reduce((pSum,b)=>pSum+b,0),0)==0){
                                 poziom+=1;
                                 points += 1000;
 
                                 bricks = randomBricks();
                             }
                         }
                     }
                 }
             }
            cn++;});

            context.clearRect(0,0,500,500);
            context.save();
            for(var i = 0; i < 10; i++){
                for(var j = 0; j<10; j++){
                    if(bricks[j][i]>0) {
                        context.beginPath();
                        context.fillStyle = brick.fillStyles[bricks[j][i]];
                        context.fillRect(i*(brick.width+2),j*(brick.height+2),brick.width,brick.height);
                        context.strokeRect(i*(brick.width+2),j*(brick.height+2),brick.width,brick.height);
                        context.closePath();
                    }
                }
            }
            context.restore();

            // 4. Rysowanie obiektów (po wyznaczeniu stanu wszystkich obiektów)
            // 4.1. zapamiętanie stanu płótna
            context.save();
            balls.forEach(ball => {
                context.beginPath();
                context.fillStyle = "blue";
                context.strokeStyle = "black";
                context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
                context.closePath();
                context.stroke();
                context.fill();
            });

            // Rysowanie paletki
            context.beginPath();
            context.fillStyle = plate.fillStyle;
            context.strokeStyle = plate.strokeStyle;
            context.fillRect(plate.x, plate.y, plate.width, plate.height);
            context.strokeRect(plate.x, plate.y, plate.width, plate.height);
            context.closePath();
            
            context.fillStyle = "black";
            context.font = "12pt Calibri";
            context.textAlign = "right";
            context.textBaseline = "top";
            context.fillText("Score: "+points, area.width *0.8, 5);
            // 4.2. odtworzenie stanu płótna
            context.restore();
        } else {
            context.save();
            context.clearRect(0, 0, 500, 500);
            context.fillStyle = "black";
            context.font = "50pt Calibri";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText("Game over", area.width / 2.0, area.height / 2.0);
            context.restore();
        }



        // 5. ponowne wywołanie pętli animacji
        if (!stop) window.requestAnimationFrame(drawAnimation);
    }
    InitAnimation();
}