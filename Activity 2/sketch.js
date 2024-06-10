

function setup() {
  createCanvas(400, 400);
 
  
}

function draw() {
 
  background(25,25,50,50);
  var galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,4)

  }
  
  //stars
  push();
  fill("#FF5733");
  noStroke();
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
  pop();
  
  

  
  //UFO
  fill(0);
  noStroke();
  ellipse(width/2, height/2, 250, 100);
  ellipse(width/2, height/2.5,120,150);
  
  
  //Alien
  fill(100,220,50);
  stroke(80,100,170);
  strokeWeight(5);
  ellipse(width/2, height/2.5, 100,100);
  
  //facial features
  fill(0);
  stroke(0);
  strokeWeight(2);
  ellipse(width / 2, height/2.20, 20);
  ellipse(width/2.25, height/2.75, 30,20);
  ellipse(width/1.8, height/2.75, 30, 20);
   
}
