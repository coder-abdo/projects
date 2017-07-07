/*
equasion :
part 1:
x=pow( abs(1/a *(cos(m/4 * theta))),n2)
y = pow( abs(1/b *(sin(m/4 * theta))),n3)
z = pow((x+y),1/n1)
r = z;
x = r * cos(theta)
x = r * sin(theta)
*/
var n1,n2,n3,a,b,m,d;
n1=0.5,n2=0.02,n3=0.3,a=1,b=1,d = 0;
// set up equasion function
function superShape(theta){
  var p1 = 1/a * cos(theta * m/4);
  p1 = abs(p1);
  p1 = pow(p1,n2);
  var p2 = 1/b * sin(theta * m/4);
  p2 = abs(p2);
  p2 = pow(p2,n3);
  var p3 = pow(p1+p2,1/n1);
  return (1/p3);
}
// create canvas obviously
function setup(){
  createCanvas(windowWidth,windowHeight);
}
// here is the magic happen
var cols = [[16,91,99],[255,250,213],[255,211,78],[219,158,54],
[189,73,50]];
var colors = cols[Math.floor(Math.random() * cols.length)];
function draw(){
  background(0,50);
  stroke(colors);
  noFill();
  translate(width/2,height/2);
  beginShape();
// you can also change m or n1,n2 and n3
   m = map(tan(d),-1,1,1/6,19/6);
  d+=0.001;
  var total = 1000;
  var increase =  TWO_PI / total;
  var scalex  = width/3;
  var scaley = height/3;
  for(var i = 0; i<=TWO_PI*12;i+=increase){
    var r = superShape(i);
    var x = scalex * r * cos(i);
    var y = scaley * r * sin(i);
    vertex(x,y);
  }
   endShape(CLOSE);
}
