import '../css/style.css';

let board = document.getElementById('board');

let food = document.createElement('div');

food.style.height = '25px';
food.style.width = '25px';
food.style.backgroundColor = 'yellow';
food.style.position = 'absolute';

board.appendChild(food);