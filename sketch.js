function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  background(66);
  noFill();
  frameRate(50);
}

function draw() {

  translate(width / 2, height / 2);

  var b = 90 - frameCount * 1;
  stroke(lerpColor(color('#700020'), color('#500060'), (frameCount % 120) / 60));
  line(0, 0, -300 * cos(b) * cos(b), 300 * cos(b) * sin(b));
}