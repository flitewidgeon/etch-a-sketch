
const numberOfSquares = 16;

function createGrid(){
	const grid = document.querySelector('.grid');
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

createGrid();