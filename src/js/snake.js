let blockSize = 10;
let rows = 50;
let cols = 50;
let board;
let context;

let restartBtn = document.createElement('input');

let snakeX;
let snakeY;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;
let foodCounter = document.getElementById('foodCounter');

export function render() {
  getNewSnake();
  getNewBoard();
  placeFood();
}

export function setActInterval() {
  document.addEventListener("keydown", changeDirection);
  setInterval(update, 1000/50);
}

function getNewBoard() {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");
}

function getNewSnake() {
  gameOver = false;
  snakeBody = [];
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
}

function update() {
  if(gameOver) {
    return;
  }
  context.fillStyle = "white";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
    foodCounter.innerHTML = parseInt(foodCounter.textContent) + 1
  }

  for(let i = snakeBody.length-1; i > 0; i--) {
    snakeBody[i] = snakeBody[i-1];
  }
  
  if(snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "lime";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  for(let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  if(snakeX < 0) {
    snakeX = blockSize * 50;
  } else if(snakeX > cols * blockSize) {
    snakeX = 0;
  } else if(snakeY < 0) {
    snakeY = blockSize * 50
  } else if(snakeY > rows * blockSize) {
    snakeY = 0
  }

  for(let i = 0; i < snakeBody.length; i++) {
    if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      alert("Game Over !");
      restartBtn.type = `button`;
      restartBtn.value = `Restart Game`;
      document.body.appendChild(restartBtn);
      restartBtn.addEventListener('click', () => {
        document.body.removeChild(restartBtn);
        render();
      })
    }
  }
}

function changeDirection(e) {
  if(e.code == "ArrowUp" && velocityY !== 1) {
    velocityX = 0;
    velocityY = -1;
  } else if(e.code == "ArrowDown" && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
  } else if(e.code == "ArrowLeft" && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
  } else if(e.code == "ArrowRight" && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}