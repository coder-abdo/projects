var oscillators = [];
function setup(){
  createCanvas(windowWidth,windowHeight);
    for (var i = 0; i < 500; i++) {
     oscillators.push(new Oscillator());
   }
}
function draw(){
  background(0,40);
    for (var i = 0; i < oscillators.length; i++) {
      oscillators[i].oscillate();
      oscillators[i].display();
    }
}
var cols = [[16,91,99],[255,250,213],[255,211,78],[219,158,54],[189,73,50]];
var Oscillator = function() {
  this.angle = createVector();
  this.col = cols[floor(random() * cols.length)];
  this.velocity = createVector(random(-0.01, 0.01) *0.8, random(-0.01, 0.01)*0.8);
  this.amplitude = createVector(random(20,width),  random(20,height));
  this.oscillate = function() {
    this.angle.add(this.velocity);
  };
  this.display = function() {
    var x = sin(this.angle.x) * this.amplitude.x;
    var y = sin(this.angle.y) * this.amplitude.y;
    fill(this.col, 127);
    noStroke();
    ellipse(x, y, 20, 20);
  };
};
