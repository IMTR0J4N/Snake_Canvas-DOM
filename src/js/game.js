const SNAKE_DIR = { LEFT : "left", RIGHT : "right", UP : "up", DOWN : "down" };
let direction = SNAKE_DIR.RIGHT;

export function startGame(snakeBody, board) {
  buildSnake(snakeBody, board);
  document.addEventListener('keydown', control);
}

function buildSnake(arr, board) {
  for (const coord of arr) {
    let snakePart = document.createElement('div');
    snakePart.classList.add('snakePart');
    snakePart.style.top = `${coord[1] * 10}px`;
    snakePart.style.left = `${coord[0] * 10}px`;
    board.appendChild(snakePart);
  }
}

function control(e) {
  if(e.key === "ArrowUp" && direction !== SNAKE_DIR.DOWN && direction !== SNAKE_DIR.UP) {
    direction = SNAKE_DIR.UP;
    console.log(direction);
  } else if(e.key === "ArrowDown" && direction !== SNAKE_DIR.UP && direction !== SNAKE_DIR.DOWN) {
    direction = SNAKE_DIR.DOWN;
    console.log(direction);
  } else if(e.key === "ArrowLeft" && direction !== SNAKE_DIR.RIGHT && direction !== SNAKE_DIR.LEFT) {
    direction = SNAKE_DIR.LEFT;
    console.log(direction);
  } else if(e.key === "ArrowRight" && direction !== SNAKE_DIR.LEFT && direction !== SNAKE_DIR.RIGHT) {
    direction = SNAKE_DIR.RIGHT;
    console.log(direction);
  }
}

function moveSnake() {
  
}