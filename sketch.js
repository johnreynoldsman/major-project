// tetris like project
// Lacon.R
// Nov 20th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const cellsize = 40;
let blacktile = 1;
let c = 20;
let r = 10;
let line_block = [
  [0,0,0,1,1,1,1,0,0,0],
];
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
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1]
];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  showGrid();
}
function showGrid(){
  for(let y = 0; y < c; y ++){
    for(let x = 0; x < r; x ++){
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
// the blocks are red, green, line, square, almost plus, L, backwards L
//block presets will be like 0,0,0,1,1,1,1,0,0,0 (line block)
//to move blocks will be to add and subtract 
//rotating will be dificcult but it will pretty much be reseting the preset at a different angle
//if a row is all 1's then it dissapears and every row moves down one 