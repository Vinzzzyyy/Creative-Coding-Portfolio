var img, x, y;

function preload() {

img = loadImage("flowers.jpg");

}



function setup() {

createCanvas (400, 400);

background(0);

noStroke();

}



function draw() {

x = random(width); // randomly place the ellipse

y = random(height); // getting the random shape

var c = img.get(x, y);

fill(c[0], c[1], c[2], 150); // transparency effect can be increased or decreased 

rect (x, y, 50, 50);

}