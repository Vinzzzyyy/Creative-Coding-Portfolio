// Declare microphone input and Fast Fourier Transform (FFT) analyzer objects
let mic, fft;

// Set number of bars to visualize
let numBars = 64;

// Sets the bardwidth,height and spacing is 2
let barWidth, barHeight;
let barSpacing = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // makes it so that the script will react to sounds coming from the mic
  mic = new p5.AudioIn();
  mic.start();

  // Create the FFT object and set its input to the microphone input object
  fft = new p5.FFT();
  fft.setInput(mic);

  // Calculate the width of each bar
  barWidth = width / numBars - barSpacing;
}

function draw() {
  // Set background color to black
  background(0);

  // Draw the sound visualizer
  let spectrum = fft.analyze();
  for (let i = 0; i < numBars; i++) {
    barHeight = map(spectrum[i], 0, 255, 0, height);
    // make it so that the color of spectrum in the bar is randomized
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    fill(r, g, b);
    rect(i * (barWidth + barSpacing), height - barHeight, barWidth, barHeight);
  }
}
