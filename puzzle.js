function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function canvas() {
    var canvas = new fabric.Canvas('canvas1');

    function loadimage(img){
        img.scale(0.4).set({
            left: getRandomInt(600),
            top: getRandomInt(600),
            angle: getRandomInt(30)-15
        });
        canvas.add(img).setActiveObject(img);
    }

    fabric.Image.fromURL('./assets/row-1-column-1.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-1-column-2.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-1-column-3.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-1-column-4.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-2-column-1.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-2-column-2.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-2-column-3.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-2-column-4.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-3-column-1.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-3-column-2.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-3-column-3.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-3-column-4.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-4-column-1.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-4-column-2.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-4-column-3.png', function(img){loadimage(img)});
    fabric.Image.fromURL('./assets/row-4-column-4.png', function(img){loadimage(img)});
    

}