function canvas(){
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");

    var last_time = 0;
    var brick = {width: 48, height: 18,
        fillStyles: ["blue","green","yellow","red"],
        strokeStyle: "black"
    };
    var bricks=[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 3, 3, 0, 0, 0, 0, 3, 3, 0],
                [0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
                [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
                [0, 3, 2, 3, 2, 3, 2, 1, 3, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    function InitAnimation(){
        var date = new Date();
        last_time = date.getTime();


        window.requestAnimationFrame(drawAnimation);
    }

    function drawAnimation(){
        var date = new Date();
        var time_interval = date.getTime() - last_time;
        last_time = date.getTime();
        
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
        window.requestAnimationFrame(drawAnimation);
    }
    InitAnimation();
}