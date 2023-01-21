'use strict';
const board = document.querySelector('#board'),
      colors = ['#4F10AD','#4D2982','#300571','#7F44D6','#966BD6','#9C02A7','#77207D','#65016C'],
      SQUARES_NUMBER = 700;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setColor(square);
    });
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });
    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
}

function getRandomColor () {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
