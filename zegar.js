function canvas(){
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");

    var last_time = 0;
    var stop = false;

    function InitAnimation(){
        var date = new Date();
        last_time = date.getTime;
        var clockface = document.getElementById("clockface");
        clock = {
            area: {x:0, y:0, width:canvas.width, height:canvas.height},
            radius: canvas.width/2,
            hour:0,
            minute:0,
            second:0,
            milisecond:0
        };
        context.translate(clock.area.width / 2, clock.area.height / 2);
        window.requestAnimationFrame(drawAnimation);
    }

    function drawAnimation(){
        var date = new Date();
        last_time = date.getTime();
        clock.milisecond = date.getMilliseconds();
        clock.second = date.getSeconds() + clock.milisecond/1000;
        clock.minute = date.getMinutes() + clock.second/60;
        clock.hour = date.getHours() + clock.minute/60
        if (clock.hour > 12) clock.hour -= 12;
        context.clearRect(-canvas.width/2, -canvas.height/2, 500, 500);

        //obraz zegar
        context.drawImage(clockface, -canvas.width/2, -canvas.height/2);

        context.beginPath();
        context.arc(0, 0, clock.radius, 0, Math.PI * 2);
        context.stroke();

        context.save(); // Wskazówka godzin
            context.fillStyle = "#0af56c";
            var theta = (clock.hour - 3) * 2 * Math.PI / 12;
            context.rotate(theta);
            context.beginPath();
            context.moveTo(-10, -4);
            context.lineTo(-10, 4);
            context.lineTo(clock.radius * 0.6, 1);
            context.lineTo(clock.radius * 0.6, -1);
            context.fill();
            context.closePath();
        context.restore();
        context.save();  // Wskazówka minut
            context.fillStyle = "#61b500";
            var theta = (clock.minute - 15) * 2 * Math.PI / 60;
            context.rotate(theta);
            context.beginPath();
            context.moveTo(-10, -4);
            context.lineTo(-10, 4);
            context.lineTo(clock.radius * 0.7, 1);
            context.lineTo(clock.radius * 0.7, -1);
            context.fill();
            context.closePath();
        context.restore();
        context.save();  // Wskazówka sekund
            context.fillStyle = "#f50a3d";
            var theta = (clock.second - 15) * 2 * Math.PI / 60;
            context.rotate(theta);
            context.beginPath();
            context.moveTo(-10, -4);
            context.lineTo(-10, 4);
            context.lineTo(clock.radius * 0.8, 1);
            context.lineTo(clock.radius * 0.8, -1);
            context.fill();
            context.closePath();
        context.restore();
        if(!stop) window.requestAnimationFrame(drawAnimation);
    }

    InitAnimation();
}