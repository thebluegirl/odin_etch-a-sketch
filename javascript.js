//Take control of HTML elements
const container = document.getElementById('container');
const rows = document.getElementsByClassName('grid-row');
const gridSizeButton = document.getElementById('grid-size-button');
const resetGrid = document.getElementById('reset-grid');

let row;
let cells;
let num = 16;

function makeGrid() {
    makeRow(num);
    makeCells(num);
}

function makeRow(num) {
   for (let i = 0; i < num; i++){
    row = document.createElement('div');
    row.setAttribute('class', 'grid-row');
    row.setAttribute('id', `grid-row-${i}`);
    container.appendChild(row);
   }
}

function makeCells(num){
    for (let i = 0; i < Array.from(rows).length; i++){
        for (let j = 0; j < num; j++){
            cells = document.createElement('div');
            cells.setAttribute('class', 'grid-cells');
            cells.setAttribute('id', `grid-cell-${j}-${i}`);
            let columns = document.getElementById(`grid-row-${j}`)
            columns.appendChild(cells);
            cells.addEventListener('mouseover', e => {
                e.target.classList.add('black');
            })
        }
    }
}

makeGrid();

gridSizeButton.addEventListener('click', e => {
    let cellNum = +prompt('How many cells would you like your grid to have?');

    if (cellNum > 100) {
        cellNum = +prompt('The maximum limit is 100. Please enter a lower number.');
        cellNum;
    } else if (cellNum < 10) {
       cellNum = +prompt('The minimum limit is 10. Please enter a higher number');
        cellNum;
    } else if (Number.isInteger(cellNum) === false) {
        cellNum = +prompt('Please enter a number between 10 and 100 in digits')
        cellNum;
    } else {
        container.innerHTML = '';
        num = cellNum;
        makeGrid();
    }
})

resetGrid.addEventListener('click', e => {
    container.innerText = ``;
    makeGrid();
})