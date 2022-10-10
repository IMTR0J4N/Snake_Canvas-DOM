import '../css/style.css';
import { buildSnake, control } from './game';

const SNAKE_DIR = { LEFT : "left", RIGHT : "right", UP : "up", DOWN : "down" };

const snakeBody = [[36, 30], [37, 30], [38, 30], [39, 30], [40, 30]];

let board = document.getElementById('board');

buildSnake(snakeBody, board);

document.addEventListener('keydown', control);