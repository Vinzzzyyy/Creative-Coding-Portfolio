var word = "Vinz Patrick Meriales"; 

var  font1; 



function preload() { 

font1 = loadFont("RebellionSquad-ZpprZ.ttf"); 


 } 

function setup() { createCanvas(650, 600); background(255); fill(255,0,255); textFont(font1, 50); textAlign(CENTER); text(word, width/2, height/2);

 }