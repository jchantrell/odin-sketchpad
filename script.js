
// create div with 'cell' class x amount of times
function createCell() { 
    let cell = document.createElement('div');
    cell.className = "cell";
    cell.addEventListener("mouseenter", function (e){
        if(e.buttons == 1 || e.buttons == 3){
            e.target.style.background = cellColour;
    }
    })
    return cell;
}


const cellSlider = document.querySelector('.cellsize')
cellSlider.oninput = function() {
    cellSliderValue = this.value
    scaleCell(cellSliderValue)
    console.log(cellSliderValue)
}

function scaleCell(cellSliderValue) {
    cell = document.querySelectorAll('.cell')
    cell.forEach(cell => {
        cell.style.height = cellSliderValue + 'px';
        cell.style.width = cellSliderValue + 'px';}
    )}

function colourCell(colour) {
    cellColour = colour;
}

const gridSlider = document.querySelector('.gridsize')
gridSlider.oninput = function() {
    gridSliderValue = this.value
    createGrid(gridSliderValue)
    console.log(gridSliderValue)
}
function createGrid(number){
    grid = document.querySelector('.grid');
    gridScale = number * 16;
    gridMeasurements = number * 16;
    while (gridMeasurements --){
        grid.appendChild(createCell());
        grid.style.height = gridScale + 'px';
        grid.style.width = gridScale + 'px';   
    }
}

function clearGrid(){
    cell = document.querySelectorAll('.cell')
    cell.forEach(cell => {
        cell.style.background = "white";}
)}

// reset board 
const reset = document.querySelector(".reset");
reset.onclick = clearGrid; 

// default colour
let cellColour = "DodgerBlue"

const red = document.querySelector(".red");
red.onclick = function(){
    cellColour = "crimson";
}
const orange = document.querySelector(".orange");
orange.onclick = function(){
    cellColour = "coral";
}
const yellow = document.querySelector(".yellow");
yellow.onclick = function(){
    cellColour = "gold";
}
const green = document.querySelector(".green");
green.onclick = function(){
    cellColour = "forestgreen";
}
const blue = document.querySelector(".blue");
blue.onclick = function(){
    cellColour = "dodgerblue";
}
const purple = document.querySelector(".purple");
purple.onclick = function(){
    cellColour = "darkviolet";
}
const pink = document.querySelector(".pink");
pink.onclick = function(){
    cellColour = "deeppink";
}

// create grid with initial value
createGrid(1000)

