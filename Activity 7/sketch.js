let cloudX = 0;
let font;

function preload() {
  // Load a pixelated font
  font = loadFont('VT323-Regular.ttf');
}

function setup() {
  createCanvas(600, 400);
  noSmooth(); // Disable anti-aliasing for pixelated effect
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont(font);
}

function draw() {
  drawBackground();
  drawText();
}

function drawBackground() {
  background(135, 206, 250); // Sky blue background

  // Ground
  fill(255,0,0); // red
  rect(0, height - 60, width, 25); // Ground rectangle
  fill(0); // black
  rect(0, height - 50, width, 5)
  fill(221,216,0); // ground
  rect(0, height - 45, width, 45)

  // Draw clouds
  let cloudY = 60;
  drawCloud(cloudX, cloudY);
  drawCloud(cloudX - 200, cloudY + 30);

  // Move clouds
  cloudX = (cloudX + 5) % (width + 100);
}

function drawCloud(x, y) {
  noStroke();
  // Cloud color gradient
  let cloudColor1 = color(255, 255, 255, 200);
  let cloudColor2 = color(255, 255, 255, 0);
  for (let i = 0; i < 60; i += 20) {
    fill(lerpColor(cloudColor1, cloudColor2, i / 60));
    rect(floor((x + i) / 20) * 20, floor(y / 20) * 20, 20, 20); // Quantize positions
    rect(floor((x - i + 40) / 20) * 20, floor((y + 20) / 20) * 20, 20, 20); // Quantize positions
  }
}

function drawText() {
  // writing 'bathspa' in the middle of the screen
  fill(255); // White color for text
  text("BATHSPA", width / 2, height / 3);

  // Text Size for BathSpa University
  textSize(40);
  text("UNIVERSITY", width / 2, height / 3 + 50);
}
