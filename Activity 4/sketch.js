var rows = 30;
var cols = 30;
var distanceX = 30;
var distanceY = 30;

var palette = ["#9C27B0", "#9E9E9E", "#FFEB3B"];

function setup() {
	createCanvas(700, 700);
	//you can call the function to automatically trigger one random 
	mousePressed();
}

function mousePressed() {
	background(0);
	rectMode(CENTER);
	noStroke();
	colorMode(HSB);
	
	for (var r = 1; r < rows; r++) {
		for (var c = 1; c < cols; c++) {
			
			var randomColor = random(palette);
			fill(randomColor);
			
			var size = random(15,30);
			
			print("the random size is "+size);
			
			//randomize a number between 0 and 2 (floor rounds down to the integer so 3 never happens)
			var shape = floor(random(3)); 
			
			//use if to choose between a shape or another one or no shape when random number is 2
			if(shape == 0) {
				ellipse(c*distanceX, r*distanceY, size, size);
			}
			if(shape == 1) {
				rect(c*distanceX, r*distanceY, size, size);
			}
            if(shape == 2) {
                triangle(
						c * distanceX - size / 2, r * distanceY + size / 2,
						c * distanceX + size / 2, r * distanceY + size / 2,
						c * distanceX, r * distanceY - size / 2
					);
            }
			
		}
	}
}