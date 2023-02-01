const board = document.querySelector('#board');
const SQUARS_NUMBER = 1000;
const colors = ['#e74a3c', '#8a44ad', '#3498ab', '#e67d22', '#2acc71'];

for (let i = 0; i < SQUARS_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', setColor);

	square.addEventListener('mouseleave', removeColor);

	board.append(square);
}

function setColor(event) {
	const element = event.target;
	const color = getRandomtColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
	const element = event.target;
	element.style.background = '#6c6b6b';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomtColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
