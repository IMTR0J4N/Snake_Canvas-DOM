import '../css/style.css';
import { buildSnake } from './game';

const SNAKE_DIR = { LEFT : "left", RIGHT : "right", UP : "up", DOWN : "down" };

const snakeBody = [[36,30], [37, 30], [38, 30], [39, 30], [40, 30]];

let board = document.getElementById('board');

let direction = SNAKE_DIR.RIGHT;

buildSnake(snakeBody, board);

document.addEventListener('keydown', (dir) => {
    if(dir.key === "ArrowUp" && direction !== SNAKE_DIR.DOWN && direction !== SNAKE_DIR.UP) {
      direction = SNAKE_DIR.UP;
      console.log(direction);
    } else if(dir.key === "ArrowDown" && direction !== SNAKE_DIR.UP && direction !== SNAKE_DIR.DOWN) {
      direction = SNAKE_DIR.DOWN;
      console.log(direction);
    } else if(dir.key === "ArrowLeft" && direction !== SNAKE_DIR.RIGHT && direction !== SNAKE_DIR.LEFT) {
      direction = SNAKE_DIR.LEFT;
      console.log(direction);
    } else if(dir.key === "ArrowRight" && direction !== SNAKE_DIR.LEFT && direction !== SNAKE_DIR.RIGHT) {
      direction = SNAKE_DIR.RIGHT;
      console.log(direction);
    }
})