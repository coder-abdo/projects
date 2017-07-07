// setup my function
function createCanvas(obj){
  'use strict';
  var body = document.body;
  return body.appendChild(obj);
}
var canvas = {
  elm:document.createElement('canvas'),
  width:window.innerWidth,
  height:window.innerHeight
};
// create Canvas and it's Context
var creation = createCanvas(canvas.elm);
var ctx = creation.getContext('2d');
var width = creation.width = canvas.width;
var height = creation.height = canvas.height;
// math function
function random(min,max){
  min  = min || 0;
  max = max || 1;
  return Math.random() * (max-min)+min;
}
var floor = Math.floor;
var sin = Math.sin;
var cos = Math.cos;
// fill and stroke functions
function background(col){
   ctx.fillStyle = col;
   return ctx.fillRect(0,0,creation.width,creation.height);
}
function fill(col){
  return ctx.fillStyle = col;
}
function stroke(col){
  return ctx.strokeStyle = col;
}
function strokeWidth(num){
  return ctx.lineWidth = num;
}
function clear(x,y,w,h){
  return ctx.clearRect(x,y,w,h);
}
// setup my shapes
// rectangle
function rect(x,y,w,h){
  var rect = {
    filly:ctx.fillRect(x,y,w,h),
    stroky:ctx.strokeRect(x,y,w,h)
  };
  return rect;
}
// circle
function ellipse(x,y,radius){
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI *2,false);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}
// lines
function line(x1,y1,x2,y2){
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}
//end my functions
var balls = [],
num = 800,
colors = [
  '#2E0927',
  '#D90000',
  '#FF2D00',
  '#FF8C00',
  '#04756F'
],
i;
// particle Object
function Particle (x,y,radius){
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.theta = 0;
  this.col = colors[floor(random()*colors.length)];
  this.ax = cos(this.theta) ;
  this.ay = sin(this.theta) ;
  this.radius = radius;
  this.show = function(){
    fill(this.col);
    stroke(this.col);
    ellipse(this.x,this.y,this.radius);
  }
  // apply forces
  this.update = function(){
    this.theta += 0.02;
    this.x += this.vx;
    this.y +=this.vy;
    this.vx += this.ax;
    this.vy += this.ay;
  }
  // to stop ball out of edges
  this.bound = function(){
      if(this.x +this.radius/2  < 0){
        this.x = 0;
        this.vx *=-1;
      }
      if(this.x +this.radius/2  > width){
        this.x = width;
        this.vx *=-1;
      }
      if(this.y +this.radius/2  < 0){
        this.y = 0;
        this.vy *=-1;
      }
      if(this.y +this.radius/2  > width){
        this.y = width;
        this.vy *=-1;
      }
  }
}
function init(){
    for(i =0;i<num;i++){
      var x = random(0,width);
      var y = random(0,height);
      balls.push (new Particle(x,y,10));
     }
}
function draw(){
    var j;
    requestAnimationFrame(draw);
    clear(0,0,width,height);
    background("#000");
    for(j =0;j<balls.length;j++){
      balls[j].show();
      balls[j].update();
      balls[j].bound();
    }
}
init();
draw();
