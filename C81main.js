canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "red";
lineWidth= 2;
var last_x, last_y, current_x, current_y ;
var mouseEvent= "empty"

var width= screen.width;
new_width= screen.width - 10;
new_height= screen.height - 200;

if (width<= 992) {
 
    document.getElementById("myCanvas").width= new_width;
    document.getElementById("myCanvas").height= new_height;
    document.body.style.overflow= "hidden";
   }
   
   canvas.addEventListener("touchstart", MYtouchstart);
   canvas.addEventListener("touchmove", MYtouchMove);
   function MYtouchstart(e) {
       color= document.getElementById("colour").value;
       lineWidth= document.getElementById("width").value;
       last_x= e.touches[0].clientX - canvas.offsetLeft;
       last_y= e.touches[0].clientY - canvas.offsetTop;
   
   }
   function MYtouchMove(e) {
       current_y= e.touches[0].clientY - canvas.offsetTop;
       current_x= e.touches[0].clientX - canvas.offsetLeft;
   
           ctx.beginPath();
           ctx.strokeStyle= color;
           ctx.lineWidth= lineWidth;
           ctx.moveTo(last_x, last_y);
           ctx.lineTo(current_x, current_y);
           ctx.stroke();
       last_x= current_x;
       last_y= current_y;
   }

canvas.addEventListener("mousedown", MYmouseDown);
canvas.addEventListener("mousemove", MYmouseMove);
canvas.addEventListener("mouseup", MYmouseUp);
canvas.addEventListener("mouseleave", MYmouseLeave);
function MYmouseDown(e) {
    color= document.getElementById("colour").value;
    lineWidth= document.getElementById("width").value;
    mouseEvent= "mousedown";
}
function MYmouseMove(e) {
    current_y= e.clientY - canvas.offsetTop;
    current_x= e.clientX - canvas.offsetLeft;
    if (mouseEvent== "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= lineWidth;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x= current_x;
    last_y= current_y;
}

function MYmouseUp() {
    mouseEvent= "mouseup";
}

function MYmouseLeave() {
    mouseEvent= "mouseleave"
}
function ClearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}