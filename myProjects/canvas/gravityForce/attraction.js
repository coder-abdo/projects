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
// my math function
function random(min,max){
  min  = min || 0;
  max = max || 1;
  return Math.random() * (max-min)+min;
}
var floor = Math.floor;
var sin = Math.sin;
var cos = Math.cos;
// fill and stroke functions
function background(col,alpha){
  alpha = alpha || 1;
  ctx.globalAlpha = alpha;
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
// circle
function ellipse(x,y,radius){
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI *2,false);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}
//end my functions
var cols = ['rgb(16,91,99)','rgb(255,250,213)','rgb(255,211,78)','rgb(219,158,54)',
'rgb(189,73,50)'];
function Particles (){
 this.col = cols[floor(random() * cols.length)];
 this.velx = random(-0.02, 0.02) *0.5;
 this.vely = random(-0.02, 0.02)*0.5;
 this.amplitudex = random(20,width);
 this.amplitudey = random(20,height);
 this.anglex =0;
 this.angley =0;
 this.update = function(){
   this.anglex +=this.velx;
   this.angley +=this.vely;
 };
 this.show = function(){
   fill(this.col);
   stroke(this.col);
   var x = cos(this.anglex) * this.amplitudex + width/2;
   var y = sin(this.angley) * this.amplitudey + height/2;
   ellipse(x,y,10);
 };
}
var balls = [];
var count = 300;
function setup(){
  // ctx.globalAlpha = 0.2;
  for(var i  = 0 ;i<=count;i++){
    balls.push(new Particles());
  }
}
function draw(){
  requestAnimationFrame(draw);
  background('#000',0.2);
  for(var j = 0;j<balls.length;j++){
    balls[j].show();
    balls[j].update();
  }
}
setup();
draw();
