//Take control of HTML elements
const container = document.getElementById('container');
const rows = document.getElementsByClassName('grid-row');
const gridSizeButton = document.getElementById('grid-size-button');
const resetGrid = document.getElementById('reset-grid');
const sketchPadSize = 500;
const randomColourPen = document.getElementById('random-colour-pen');
const blackPen = document.getElementById('black-pen');

let row;
let cells;
let num = 16;
let isRandomColour = true;
let isBlack = false;

function makeGrid() {
    makeRow(num);
    makeCells(num);
}

function makeRow(num) {
   for (let i = 0; i < num; i++){
    row = document.createElement('div');
    row.setAttribute('class', 'grid-row');
    row.setAttribute('id', `grid-row-${i}`);
    row.style.width = `${sketchPadSize / num}px`
    container.appendChild(row);
   }
}

function makeCells(num){
    for (let i = 0; i < Array.from(rows).length; i++){
        for (let j = 0; j < num; j++){
            cells = document.createElement('div');
            cells.setAttribute('class', 'grid-cells');
            cells.setAttribute('id', `grid-cell-${j}-${i}`);
            cells.style.height = `${sketchPadSize / num}px`;
            let columns = document.getElementById(`grid-row-${j}`)
            columns.appendChild(cells);
            cells.addEventListener('mouseover', e => {
                if (isBlack) {
                    e.target.style.backgroundColor = 'black'
                } else if (isRandomColour) { 
                    e.target.style.backgroundColor = randomColorGenerator();
                }
            })
        }
    }
}

makeGrid();

gridSizeButton.addEventListener('click', e => {
    let cellNum = +prompt('Please type in your preferred grid dimension');

    if (cellNum > 100) {
        cellNum = +prompt('The maximum limit is 100. Please enter a lower number.');
        cellNum;
    } else if (cellNum < 1) {
       cellNum = +prompt('The minimum limit is 1. Please enter a higher number');
        cellNum;
    } else if (Number.isInteger(cellNum) === false) {
        cellNum = +prompt('Please enter a number between 1 and 100 in digits')
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

function randomColorGenerator() {
    let r = Math.floor((Math.random() * 255) + 1);
    let g = Math.floor((Math.random() * 255) + 1);
    let b = Math.floor((Math.random() * 255) + 1);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
}

randomColourPen.addEventListener('click', (e) => {
    isRandomColour = true;
    isBlack = false;
})

blackPen.addEventListener('click', (e) => {
    isRandomColour = false;
    isBlack = true;
})