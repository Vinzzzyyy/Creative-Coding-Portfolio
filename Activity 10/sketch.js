let bullets = [];
let enemies = [];
let stars = [];
let score = 0;
let lives = 5;
let gameOver = false;
let gameWon = false;
let playerColor;
let gameStarted = false;

function setup() {
  createCanvas(600, 400);
  resetGame();

  // Initialize stars
  for (let i = 0; i < 100; i++) {
    let star = {
      x: random(width),
      y: random(height),
      size: random(1, 3)
    };
    stars.push(star);
  }
}

function draw() {
  background(41); // Dark background theme for space

  // Draw stars that will go along with the dark theme of space
  for (let star of stars) {
    fill(255);
    noStroke();
    ellipse(star.x, star.y, star.size, star.size);
  }

  rectMode(CENTER);

  if (!gameStarted) {
    displayTitleScreen();
    return;
  }

  if (gameOver) {
    displayGameOver();
    return;
  }

  if (gameWon) {
    displayGameWon();
    return;
  }

  // Draw the player
  fill(playerColor);
  drawTriangle(mouseX, height - 50, 15);

  // Update and draw bullets
  for (let bullet of bullets) {
    bullet.y -= 10;
    fill(bullet.color);
    drawTriangle(bullet.x, bullet.y, 9);
  }

  // Update and draw enemies
  for (let enemy of enemies) {
    enemy.y += 2;
    fill(255);
    rect(enemy.x, enemy.y, 30, 10);
    if (enemy.y > height) {
      lives -= 1;
      if (lives <= 0) {
        gameOver = true;
      }
      enemy.y = random(-800, 0);
      enemy.x = random(0, width);
    }
  }

  // Deal with collisions
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 15) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let newEnemy = {
          x: random(0, width),
          y: random(-800, 0),
        };
        enemies.push(newEnemy);
        score += 1;
        if (score >= 50) {// sets the score that is needed to win in this case its 50
          gameWon = true;
        }
      }
    }
  }

  // Display score and lives
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text("Score: " + score, 15, 25);
  text("Lives: " + lives, 15, 45);
}

function mousePressed() {
  if (!gameStarted) {
    gameStarted = true;
    return;
  }

  if (gameOver || gameWon) {
    resetGame();
    return;
  }

  // Spawn a bullet 
  let bullet = {
    x: mouseX,
    y: height - 50,
    color: color(random(255), random(255), random(255)) // random color
  };
  bullets.push(bullet);

  // Change player color to random
  playerColor = color(random(255), random(255), random(255));
}

function drawTriangle(x, y, size) {
  triangle(x, y - size, x - size, y + size, x + size, y + size);
}

function resetGame() {
  score = 0;
  lives = 5;
  gameOver = false;
  gameWon = false;
  bullets = [];
  enemies = [];

  // Spawn enemies
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-800, 0),
    };
    enemies.push(enemy);
  }

  // Set initial player color
  playerColor = color(random(255), random(255), random(255));
}
// added a Title Screen 
function displayTitleScreen() {
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("Space Shooter", width / 2, height / 2 - 20);
  textSize(20);
  text("Click to Start", width / 2, height / 2 + 20);
}
//added a display that will pop up when you lost all your lives
function displayGameOver() {
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(32);
  text("You have died!", width / 2, height / 2 - 20);
  textSize(20);
  text("Click to Restart", width / 2, height / 2 + 20);
}
// added a display screen that pops up when you reach 50 points and won
function displayGameWon() {
  fill(0, 255, 0);
  textAlign(CENTER);
  textSize(32);
  text("Congratulations You Won!", width / 2, height / 2 - 20);
  textSize(20);
  text("Click to Restart", width / 2, height / 2 + 20);
}
