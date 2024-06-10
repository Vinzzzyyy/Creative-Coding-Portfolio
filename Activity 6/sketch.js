function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function mouseDragged() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  
  fill(r, g, b);
  
  // Draw a star at the middle of the mouse cursor
  let size = 50; // Size of the star
  let x = mouseX;
  let y = mouseY;
  star(x, y, size, size / 2, 4); // When the value is 2,5 it creates a star but I decided to change the value to 2,4 to make a shuriken shape instead
}

// Function to draw a star
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}