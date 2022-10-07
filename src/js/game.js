export function buildSnake(arr, board) {
    for (const coord of arr) {
      let snakePart = document.createElement('div');
      snakePart.classList.add('snakePart');
      snakePart.style.top = `${coord[1] * 10}px`;
      snakePart.style.left = `${coord[0] * 10}px`;
      board.appendChild(snakePart);
    }
}