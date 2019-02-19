

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var mousedown = false;

canvas.addEventListener("mousedown", function() {
    mousedown = true
});

canvas.addEventListener("mouseup", function() {
    mousedown = false
});

canvas.addEventListener("mousemove", function() {

    if (!mousedown) { return; }


    // event is a built-in variable, contains the event that triggered this function
    // get the x, y location of the event
    var x = event.offsetX;
    var y = event.offsetY;   //offsetX, offsetY, may not work in older browsers
    var R=document.getElementById("radius").value;
    //Draw a filled rectangle centered under the mouse click
    //x, y is the top left corner, so shift up and left by 5 to center it under the mouse.
    // var r=document.getElementById("#radius").value;
    context.beginPath();
    context.strokeStyle=document.getElementById("color").value;

    context.arc(x-R, y-R,R,0,2 * Math.PI);  // Whole circle
    context.stroke()

})