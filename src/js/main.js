import '../css/style.css';

const RIGHT = "right";
const LEFT = "left";
const TOP = "top";
const DOWN = "down";

let board = document.getElementById('board');

let snakePart = document.createElement('div');
snakePart.classList.add('snakePart')
board.appendChild(snakePart);

let direction = RIGHT;

document.addEventListener('keydown', (dir) => {
    if(dir.key === "ArrowUp" && direction !== DOWN) {
      direction = TOP;
      console.log(direction);
    } else if(dir.key === "ArrowDown" && direction !== TOP) {
      direction = DOWN;
      console.log(direction);
    } else if(dir.key === "ArrowLeft" && direction !== RIGHT) {
      direction = LEFT;
      console.log(direction);
    } else if(dir.key === "ArrowRight" && direction !== LEFT) {
      direction = RIGHT;
      console.log(direction);
    }
})
