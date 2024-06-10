//Variables  are declared and can be access in any part of the code but let are only available inside the block where they're defined. 
//https://www.youtube.com/shorts/t3_u8xBMv34 
//clip -means that any subsequent drawing operations will only be visible within the defined clipping regions.
// mask - used to apply an alpha mask/ transparency to an image
let img;

function preload(){
  img=loadImage("pink.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(190,220,250);
  
  //image inside shape, using clip function - only works with one shape
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);
  cnv7.circle(100,100,190);
  //cnv7.triangle(0,0,100,200,200,0);
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0); //positioning the image 
  image(cnv7,350,225); // putting the sub canvas inside the main canvas 
  //image inside shape, using mask function - works with multiple shapes
  img.resize(200,200); // resizing the sunflower image 
  let cnv5 = createGraphics(200,200); // creating a sub canvas
  cnv5.circle(100,100,190);
  cnv5.triangle(0,0,100,200,200,0);
  img.mask(cnv5);
  image(img,300,25); // putting the sub canvas inside the main canvas 
  
  //rectangle inside circle / circle inside rectangle using clip function
  f = createGraphics(width, height); // creating a sub canvas  - the same size of the
  ctx1 = f.canvas.getContext("2d"); // getting the 
  //cnv1.circle(100, 100, 100);
  f.strokeWeight(6); // outling the shapes
  f.rect(25, 0, 100, 100); //  x, y, sides
  ctx1.clip(); // clipping / getting the conditions/ context 
  f.fill(0, 0, 200); // circle color 
  f.circle(100, 100, 100);  // position and size of the circle 
  image(f, 50, 50); // putting the sub canvas inside the main canvas 
  
  // show drawings inside of text using clip and erase functions
  // first what's behind the text:
  cnv4 = createGraphics(width, height); // creating sub canvas   - the same size of the main canvas 
  ctx2 = cnv4.canvas.getContext("2d");
  cnv4.rect(100, 200, 200); // size of the rectangle 
  ctx2.clip(); // clipping or getting the conext 
  cnv4.fill(0, 200, 0); // circle color 
  cnv4.circle(200, 230, 100); // the position and size
  image(cnv4, 0, 0); 
  

  
  // and now for the text:
  cnv3 = createGraphics(width, height);
  cnv3.fill(200,0,0);  
  cnv3.rect(100,200,200, 200 );  // x , y, width and height 
  cnv3.erase();
  cnv3.textSize(100);
  cnv3.text('hello', 100, 350); // txt, x, y
  image(cnv3, 0, 0); // putting the sub canvas inside the main canvas 
  
}


