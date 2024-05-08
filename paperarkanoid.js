function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function canvas() {
    var canvas = document.getElementById("canvas1");
    paper.setup(canvas); //paper jest globalnym obiektem
    //przejście do wnętrza obiektu w celu bezpośredniego użycia składowych
    with(paper){
        var scene = new Path.Rectangle({
            point: [0,0],
            size: [canvas.width, canvas.height],
            strokeColor: 'black',
        });
        var location = new Point(100, 100);
        var r = 10;
        var ball = new Path.Circle(location, r);
        ball.fillColor = 'blue';
        ball.vx = 100; //prędkość poruszania [piksele/sec]
        ball.vy = 150;

        //Definicja paletki
        var plate = new Path.Rectangle({
            point: [canvas.width / 2 - 15, canvas.height - 20],
            size: [80, 5],
            strokeColor: "black",
            fillColor: "red"
        });
        plate.vx = 0; //domyślna prędkość poruszania
        var defaultBrick = {width: 48, height: 18,
            fillStyles: ["blue","green","yellow","red","black","pink","white","orange"],
            strokeStyle: "black"
        };
        var bricks=[[null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null, null]];

        for (var i = 0; i < 10; i++){ //po szerokości okna
            for (var j = 0; j < 10; j++){ //po wysokości
                if(getRandomInt(3)==2){
                    bricks[j][i] = new Path.Rectangle({x: (i*(defaultBrick.width+2)), y: (j*(defaultBrick.height+2))},{width:48,height:18})
                    bricks[j][i].strokeColor = "black";
                    bricks[j][i].fillColor = "blue";
                    console.log("brick"+i+" "+j);
                }
            }
        }

        //włączenie poruszania paletki
        var tool = new Tool();
        tool.onKeyDown = function (event){
        switch(event.key){
            case "left":
                plate.vx = -200; //lewo
                break;
            case "right":
                plate.vx = 200; //prawo
                break;
            }
        }

        tool.onKeyUp = function (event){
            switch(event.key){
                case "left":
                    plate.vx = 0; //lewo
                    break;
                case "right":
                    plate.vx = 0; //prawo
                    break;
                }
            }
        var gameOver = false;
        view.onFrame = function (evt) {
            if(!gameOver){
                var delta = evt.delta;
                var vx = ball.vx * delta; //wektor przemieszczenia po OX
                var vy = ball.vy * delta; //wektor przemieszczenia po OY
                //Detekcja kolizji lewa, prawa ścianka
                if (ball.bounds.left + vx <= scene.bounds.left || ball.bounds.right + vx >= scene.bounds.right){
                    ball.vx = -ball.vx;
                }
                //detekcja kolizji góra, dół
                if (ball.bounds.top + vy <= scene.bounds.top || ball.bounds.bottom + vy >= scene.bounds.bottom){
                    ball.vy = -ball.vy
                }
                //Poruszanie piłki
                ball.translate(vx, vy);

                plate.translate(plate.vx * delta, 0);

                if (plate.bounds.left + plate.vx * delta <= scene.bounds.left || plate.bounds.right + plate.vx * delta >= scene.bounds.right) {
                    plate.vx = 0;
                }

                if (ball.bounds.bottom + vy >= plate.bounds.top && ball.bounds.right + vx >= plate.bounds.left && ball.bounds.left + vx <= plate.bounds.right){
                    ball.vy = -ball.vy;
                } else {
                    if (ball.bounds.bottom >= plate.bounds.top){
                        gameOver = true;
                    }
                }
                for (var i = 0; i < 10; i++){ //po szerokości okna
                    for (var j = 0; j < 10; j++){ //po wysokości
                        if (bricks[j][i] != null){ //to detekcja kolizji
                             //wyznaczenie położenia każdej cegły
                             var brick_coords = {x: (i*(defaultBrick.width+2)), y: (j*(defaultBrick.height+2))};
                            
                             //sprawdzenie warunków kolizji
                             if (brick_coords.x < ball.position.x+r && ball.position.x-r < brick_coords.x+defaultBrick.width && brick_coords.y < ball.position.y+r && ball.position.y-r < brick_coords.y+defaultBrick.height){    
                                bricks[j][i].remove();
                                bricks[j][i]=null; 
                                ball.vy = -ball.vy;
                                 
                                 console.log("delete "+j+ " "+i);
                             }
                         }
                     }
                 }
            } else {
                var text = new PointText(new Point(250, 250));
                text.justification = 'center';
                text.fillColor = 'black';
                text.content = 'Koniec gry';
                text.fontSize = '50px';
            }
        }
    }
}
