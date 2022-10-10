import '../css/style.css';
import { startGame } from './game';

document.addEventListener('DOMContentLoaded', () => {

const snakeBody = [[36, 30], [37, 30], [38, 30], [39, 30], [40, 30]];

let board = document.getElementById('board');

startGame(snakeBody, board);
})