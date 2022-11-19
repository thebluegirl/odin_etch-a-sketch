//Take control of HTML elements
const container = document.getElementById('container');
const rows = document.getElementsByClassName('grid-row')
const rowsStyle = rows.style;
const allCells = document.getElementsByClassName('grid-cells');
const allCellsStyle = allCells.style

let row;
let cells;

Array.from(allCells).forEach(eachCell => changeColor())

function makeGrid() {
    makeRow(16);
    makeCells(16);
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

function changeColor() {
    eachCell.addEventListener('mouseover', e => {
        console.log('render');
        e.target.classList.add('black');
    })
}

