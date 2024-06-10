// Factual data according to https://steam250.com/most_played
let gamesData = [
  { name: "CS:GO 2", downloads: 939921 },
  { name: "DOTA 2", downloads: 509960 },
  { name: "PUBG", downloads: 263266 },
  { name: "Destiny 2", downloads: 154645 },
  { name: "Apex Legends", downloads: 143853 },
  { name: "GTA V", downloads: 98643 },
  { name: "NARAKA: BladePoint", downloads: 96253 },
  { name: "Rust", downloads: 96140 },
  { name: "Call of Duty", downloads: 80294 },
  { name: "Team Fortress 2", downloads: 77545 }
];

// Define variables for bar chart
let barWidth = 50;
let barSpacing = 100;
let xOffset = 100;
let yOffset = 100;

function setup() {
  createCanvas(1600, 600);
  // Set background color
  background(240);

  // Draw the bar chart
  drawBarChart(gamesData);
}

function drawBarChart(data) {
  // Find the maximum number of downloads to scale the bars
  let maxDownloads = Math.max(...data.map(game => game.downloads));

  // Draw the title
  textSize(20);
  textAlign(CENTER, TOP);
  fill(0);
  text("Top 10 Most Played Games based on number of concurrent users", width / 2, 20);

  // Draw the bars
  for (let i = 0; i < data.length; i++) {
    // Calculate position for each bar
    let x = xOffset + i * (barWidth + barSpacing);
    let y = height - yOffset - map(data[i].downloads, 0, maxDownloads, 0, height - 2 * yOffset);
    
    // Draw the bar
    fill(0, 128, 255);
    rect(x, y, barWidth, height - yOffset - y);
    
    // Draw the game name below the bar
    textAlign(CENTER, TOP);
    fill(0);
    text(data[i].name, x + barWidth / 2, height - yOffset + 10);
    textSize(20)
    
    // Draw the number of downloads above the bar
    textAlign(CENTER, BOTTOM);
    text(data[i].downloads, x + barWidth / 2, y - 5);
  }
}
