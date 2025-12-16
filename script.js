function createGrid(numberOfSquares){
	const body = document.querySelector('body');
	const grid = document.createElement('div');
	grid.classList.add('grid');
	body.appendChild(grid);
	
	for (let i = 0; i < numberOfSquares; i++){
		const column = document.createElement('div');
		column.classList.add('column');
		for(let j = 0; j < numberOfSquares; j++){
			const square = document.createElement('div');
			square.classList.add('square');
			column.appendChild(square)
		}
		grid.appendChild(column);
	}
}

function hover(){
	const squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.addEventListener('mouseenter', (event) => {
			event.target.classList.add('hover');
		})
	});
}

function getSize(){
	let gridSize;
	do{
		gridSize = prompt('Enter a number between 1 and 100');
	}while(gridSize < 1 || gridSize > 99);
	return gridSize;
}

function reset(){
	const grid = document.querySelector('.grid');
	grid.remove();
	const gridSize = +getSize();
	createGrid(gridSize);
	hover();
}

const squareNumber = 16;
createGrid(squareNumber);
hover();

selectBtn = document.querySelector('.selectBtn');
selectBtn.addEventListener('click', reset);



