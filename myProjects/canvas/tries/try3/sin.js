var canvas = document.getElementById('canvas'),
      c = canvas.getContext("2d"),
    xOffset = 0,
    yOffset = 0,
    w = canvas.width,
    h = canvas.height,
    n = 20,
    m = 20,
    t = 0,
    increment = 0.0002,
    colors = [
      '#2E0927',
      '#D90000',
      '#FF2D00',
      '#FF8C00',
      '#04756F'
    ],
    isAnimate = false;
function redraw(){
  var i, u, v, x, y, r, theta, q, speed;
  resize();
  c.fillStyle = 'rgba(0,0,0,0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  for(i = 0; i < m; i++){
    for(j = 0; j < n; j++){
      u = i/(n-1);
      v = j/(m-1);
      theta = u * Math.PI * 2 + j;
      speed = 10 + (Math.sin(t)/2+0.5)*3 ;
      r = v - 0.2 + (Math.sin(t * speed)) * 0.5;
      x = (Math.cos(theta + t *i)) * r * w/2 + w/2;
      y = (Math.sin(theta + t * i)) * r * h/2 + h/2;
      q = 5 + Math.sin(t*80)*2;
      radius = (Math.sin(i + t*800)+1) * (n-j)/q;
      c.fillStyle = colors[Math.floor(Math.sin(j)*colors.length)];
      drawCircle(x + xOffset, y + yOffset, radius);
    }
  }
  t += increment;
  if(isAnimate){
    requestAnimationFrame(redraw);
  }
}
function resize(){
  if(   canvas.width != window.innerWidth
     || canvas.height != window.innerHeight ){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    size = (canvas.width + canvas.height) / 2;
    w = size;
    h = size;
      xOffset = (canvas.width - size) / 2;
      yOffset = (canvas.height - size) / 2;
  }
}
function drawCircle(x, y, radius, arcAngle){
  arcAngle = arcAngle || Math.PI * 2;
  c.beginPath();
  c.arc(x, y, radius, 0, arcAngle);
  c.closePath();
  c.fill();
}
redraw();
canvas.addEventListener('mousemove', function(){
  isAnimate = true;
  redraw();
});

canvas.addEventListener('mouseout', function(){
  isAnimate = false;
});
