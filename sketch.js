var fireworks = [];
var gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.1);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (random(1) < 0.1) {
    fireworks.push(new Firework());
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }

  text("HAPPY NEW YEAR 2021!!!", width / 2, 45);
  textAlign(CENTER);
  fill(255, 25);
  textSize(50);


}
