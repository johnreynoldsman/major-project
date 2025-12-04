// tetris like project
// Lacon.R
// Nov 20th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const cellsize = 40;
let y;
let x;
let cols = 10;
let rows = 20;
let Hero = 
  [0,0,0,1,1,1,1,0,0,0]
;
let Teewee = 
  [0,0,0,0,1,0,0,0,0,0]
    [0,0,0,1,1,1,0,0,0,0];
let Smashboy = 
  [0,0,0,0,1,1,0,0,0,0]
    [0,0,0,0,1,1,0,0,0,0];
let grid = [
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
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  showGrid();
}
function showGrid(){
  for(let y = 0; y < rows; y ++){
    for(let x = 0; x < cols ; x ++){
      if(grid[y][x] === 1){
        fill("black");
      }
      else if(grid[y][x] === 0){
        fill("white");
      }
      rect(x * cellsize, y * cellsize, cellsize);
    }
  }
}


//block presets will be like 0,0,0,1,1,1,1,0,0,0 (line block)
//to move blocks will be to add and subtract on the x axis
//rotating will be dificult but it will pretty much be reseting the preset at a different angle make sure it doesnt collide with other things
//if a row is all 1's then it dissapears and every row moves down one 