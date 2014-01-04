;define('utils/spinner', (function(){

    var interval, started, color;
    var htmlNode, canvas, context;

    var spinnerID = "spinner" + Math.random();

    function init(target, rgb){

        color = rgb;
        htmlNode = document.getElementById(target);

        if(!htmlNode){

            htmlNode = document.querySelector(target);

        }

        var canvas = document.createElement("canvas");

        canvas.id     = spinnerID;
        canvas.width  = 30;
        canvas.height = 30;
        canvas.style.zIndex   = 999;

        canvas.style.position = "fixed";
        canvas.style.top = '50%';
        canvas.style.left = '50%';
        canvas.style.marginTop = '-30px';
        canvas.style.marginLeft = '-30px';

        var body = document.getElementsByTagName("body")[0];
        htmlNode.appendChild(canvas);

        context = canvas.getContext("2d");

    }

    function start(){

        started = new Date();
        interval = setInterval(draw, 1000 / 30);

    }

    function draw(){

        var rotationsSinceStarted = (new Date() - started) / 1000;
        var rotationInTwelfths = parseInt(rotationsSinceStarted * 12) / 12;

        context.save();

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.translate(context.canvas.width / 2, context.canvas.height / 2);
        context.rotate(Math.PI * 2 * rotationInTwelfths);

        for (var i = 0; i < 16; i++) {

            context.rotate(Math.PI * 2 / 12);
            context.beginPath();
            context.moveTo(4, 0);
            context.lineTo(8, 0);
            context.strokeStyle = 'rgba(' + color + ',' + i / 12 + ')';
            context.stroke();

        }

        context.restore();

    }



    function dispose(){

        clearInterval(interval);

        started = null;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        htmlNode.removeChild(document.getElementById(spinnerID));

    }

    return{

        init: init,
        start: start,
        dispose: dispose

    }


}))