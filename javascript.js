//Take control of HTML elements
const container = document.getElementById('container');
const rows = document.getElementsByClassName('grid-row')

let row;
let cells;

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
            // cells.setAttribute('id', `grid-cell-${i}-${j}`);
            let columns = document.getElementById(`grid-row-${j}`)
            columns.appendChild(cells);
        }
    }
}


makeGrid();