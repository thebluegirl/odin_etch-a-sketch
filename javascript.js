//Take control of HTML elements
const container = document.getElementById('container');
const columnCells = document.getElementsByClassName('grid-column')

let column;
let rows;

function makeGrid() {
    makeColumn(16);
    makeRows(16);
}

function makeColumn(num) {
   for (let i = 0; i < num; i++){
    column = document.createElement('div');
    column.setAttribute('class', 'grid-column');
    column.setAttribute('id', `grid-column-${i}`);
    container.appendChild(column);
   }
}

/* function makeRows(num){
    for (let i = 0; i < Array.from(columnCells).length; i++){
        for (let j = 0; j < num; j++){
            rows = document.createElement('div');
            rows.setAttribute('class', 'grid-rows');
            rows.setAttribute('id', `grid-row-${j}`);
            column[j].appendChild(rows)
        }
    }
} */


makeGrid();