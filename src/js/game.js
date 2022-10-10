const SNAKE_DIRECTIONS = { DOWN: { x: 0, y: 1 }, UP: { x: 0, y: -1 }, LEFT: { x: -1, y: 0 }, RIGHT: { x: 1, y: 0 } };
const board = document.getElementById('board');

let snake = getNewSnake();
let apple = getNewApple(snake);
let nextSnakeDirection = SNAKE_DIRECTIONS.DOWN;
let previousSnakeDirection = SNAKE_DIRECTIONS.DOWN;
let wasAppleEatenThisTurn = false;

function restartBoard() {
  board.innerHTML = '';
  for(let i=0; i<50; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      board.appendChild(row);

      for(let j=0; j<50; j++){
          const tile = document.createElement('div');
          tile.classList.add('tile')
          row.appendChild(tile);
      }
  }
}

function getNewApple(snake) {
  while(true) {
      let apple = {
          x: Math.floor(Math.random() * 50),
          y: Math.floor(Math.random() * 50),
      }
      if(snake.every(snakePart => snakePart.x !== apple.x || snakePart.y !== apple.y)) {
          return apple;
      }
  }
}

function getNewSnake() {
  return [
      {x: 0, y:2},
      {x: 0, y:1},
      {x: 0, y:0},
  ]
}

export function restartGame(){
  restartBoard();
  snake = getNewSnake();
  nextSnakeDirection = SNAKE_DIRECTIONS.DOWN;
  previousSnakeDirection = SNAKE_DIRECTIONS.DOWN;
  apple = getNewApple(snake);
}

export function addKeyHandlers() {
  document.addEventListener('keydown', ({key}) => {
      const upperCaseKey = key.toUpperCase();

      if(upperCaseKey === 'Q' && previousSnakeDirection != SNAKE_DIRECTIONS.RIGHT || upperCaseKey === "ARROWLEFT" && previousSnakeDirection != SNAKE_DIRECTIONS.RIGHT) {
          nextSnakeDirection = SNAKE_DIRECTIONS.LEFT;
      } else if(upperCaseKey === 'Z' && previousSnakeDirection != SNAKE_DIRECTIONS.DOWN || upperCaseKey === "ARROWUP" && previousSnakeDirection != SNAKE_DIRECTIONS.DOWN) {
          nextSnakeDirection = SNAKE_DIRECTIONS.UP;
      } else if(upperCaseKey === 'S' && previousSnakeDirection != SNAKE_DIRECTIONS.UP || upperCaseKey === "ARROWDOWN" && previousSnakeDirection != SNAKE_DIRECTIONS.UP) {
          nextSnakeDirection = SNAKE_DIRECTIONS.DOWN;            
      }  else if(upperCaseKey === 'D' && previousSnakeDirection != SNAKE_DIRECTIONS.LEFT || upperCaseKey === "ARROWRIGHT" && previousSnakeDirection != SNAKE_DIRECTIONS.LEFT) {
          nextSnakeDirection = SNAKE_DIRECTIONS.RIGHT; 
      }
  })
}

export function moveSnake() {
  if(!wasAppleEatenThisTurn){
      snake.pop();
  }
  wasAppleEatenThisTurn = false;
  let newHead = {
      x: snake[0].x + nextSnakeDirection.x, 
      y: snake[0].y + nextSnakeDirection.y, 
  }

  if(newHead.x < 0) {
      newHead.x = 50;
  }
  if(newHead.y < 0) {
      newHead.y = 50;
  }
  if(newHead.x > 50) {
      newHead.x = 0;
  }
  if(newHead.y > 50) {
      newHead.y = 0;
  }

  snake = [newHead, ...snake];

  previousSnakeDirection = nextSnakeDirection;
}


export function checkSnakeHeadToAppleCollision() {
  if(snake[0].x === apple.x && snake[0].y === apple.y) {
      wasAppleEatenThisTurn = true;
      apple = getNewApple(snake);
  }
}

export function checkSnakeHeadToSnakeTailCollision() {
  const head = snake[0];
  const tail = snake.slice(1);
  if(tail.some(tailPart => tailPart.x === head.x && tailPart.y === head.y)){
      restartGame();
  }
}

function clearBoard() {
  let tiles = document.querySelectorAll('.tile');
  Array.from(tiles).forEach(tile => tile.classList.remove('snake', 'apple'))
}

function renderSnake(){
  snake.forEach(snakePart => {
      const query = `.row:nth-child(${snakePart.y + 1}) > .tile:nth-child(${snakePart.x + 1})`;
      const snakePartTile = document.querySelector(query);
      snakePartTile.classList.add('snake');
  })
}

function renderApple() {
  const query = `.row:nth-child(${apple.y + 1}) > .tile:nth-child(${apple.x + 1})`;
  const appleTile = document.querySelector(query);
  appleTile.classList.add('apple');
}

export function render(){
  clearBoard();
  renderApple();
  renderSnake();
}
