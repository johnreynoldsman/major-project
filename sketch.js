// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const cellsize = 40;
let blacktile = 1;
let x = 10;
let y = 20;
let red_block = [
  [1,1,0],
  [0,1,1]
];
let grid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,0],
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
  for(let x = 0; x <= 10; x++){
    for(let y = 0; y <= 20; y++){
      square(x * cellsize, y * cellsize, cellsize);
    }
  }
  if (keyIsDown(65)){
    grid.push(red_block);
    console.log(red_block, x, y);
  }
}
function changeColor(){
  if (grid(x, y) === 1){
    fill ('black');
  }
}

// board is 10 wide and 20 tall 
// the blocks are red, green, line, square, almost plus, L, backwards L
//block presets will be like 0,1,1,1,1,0,0,0,0,0 (line block)
//to move blocks will be to add and subtract 
//rotating will be dificcult but it will pretty much be reseting the preset at a different angle
//if a row is all 1's then it dissapears and every row moves down one 