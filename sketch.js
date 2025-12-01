// tetris like project
// Lacon.R
// Nov 20th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const cellsize = 40;
let y;
let x;
let cols = 20;
let rows = 10;
let hero = 
  [0,0,0,1,1,1,1,0,0,0]
;
let grid = [
  [1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,1],
  [0,0,0,0,0,0,0,0,1,0]
];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  showGrid();
}
function showGrid(){
  for(let x = 0; x < rows ; x ++){
    for(let y = 0; y < cols; y ++){
      rect(x * cellsize, y * cellsize, cellsize);
      if(grid[y][x] === 1){
        fill("black");
      }
      else if(grid[y][x] === 0){
        fill("white");
      }
    }
  }
}



// board is 10 wide and 20 tall 
// the blocks are S "Rhode island Z", Z "Cleveland Z", line"Hero", square "Smash boy", almost plus "Teewee", L "Orange Ricky", J "Blue Ricky"
//block presets will be like 0,0,0,1,1,1,1,0,0,0 (line block)
//to move blocks will be to add and subtract on the x axis
//rotating will be dificcult but it will pretty much be reseting the preset at a different angle make sure it doesnt collide with other things
//if a row is all 1's then it dissapears and every row moves down one 