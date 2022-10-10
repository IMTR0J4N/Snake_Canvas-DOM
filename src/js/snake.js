import '../css/style.css';
import { moveSnake, checkSnakeHeadToAppleCollision, checkSnakeHeadToSnakeTailCollision, render, restartGame, addKeyHandlers } from './game';

document.addEventListener('DOMContentLoaded', () => {
  const gameLoop = () => {
    moveSnake();
    checkSnakeHeadToAppleCollision();
    checkSnakeHeadToSnakeTailCollision();
    render(); 
  }
  
  restartGame();
  setInterval(gameLoop, 1000/50);
  addKeyHandlers();
})