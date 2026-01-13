// tetris like project
// Lacon.R
// Nov 20th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const cellsize = 40;
// let interval = setInterval(dropBlock, 500);
let currentY = 0;
let currentX= 0;
let dy = 1;
//let dropper = 10;
let x;
let i = 0;
let cols = 10;
let rows = 20;
let Filler = 
[[0,0,0,0,0,0,0,0,0,0]];
let Hero = 
  [[0,0,0,1,1,1,1,0,0,0]];
let Hero2 =
[[0,0,0,0,0,1,0,0,0,0,],
  [0,0,0,0,0,1,0,0,0,0,],
  [0,0,0,0,0,1,0,0,0,0,],
  [0,0,0,0,0,1,0,0,0,0,]];
let Teewee = 
  [[0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0]];
let Smashboy = 
  [[0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0]];
let rhodeIslandZ = 
  [[0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,1,1,0,0,0,0]];
let clevelandZ = 
  [[0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0]];
let blueRicky = 
  [[0,0,0,1,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0]];
let orangeRicky = 
  [[0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0]];
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
//let aBlock = random(Hero, Teewee, rhodeIslandZ, clevelandZ, orangeRicky, blueRicky, Smashboy);
function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke();
  copyStuff(grid, Hero2, currentX, currentY);
  dropBlock(currentX, currentY);
  setInterval(dropBlock, 750);
}

function draw() {
  background(220);
  // copyStuff(grid, Hero2);
  showGrid();
  //blocksFall(grid, Smashboy);
  // grid.splice(0, 2, Smashboy);
}
function showGrid(){
  for(let y = 0; y < rows; y ++){
    for(let x = 0; x < cols ; x ++){
      if(grid[y][x] === 1){
        fill(127.5);
      }
      else if(grid[y][x] === 0){
        fill("white");
      }
      rect(x * cellsize, y * cellsize, cellsize);
    }
  }
}
//to move blocks will be to add and subtract on the x axis
//rotating will be difficult but it will pretty much be reseting the preset at a different angle make sure it does'nt collide with other things
//if a column is all 1's then it dissapears and every column moves down one 

//Mr schellenberg made this function for me...
function copyStuff(grid, thingToPutIn, currentX, currentY) {
  let rowsToCopy = thingToPutIn.length;
  for (let y = currentY; y < rowsToCopy + currentY; y++) {
    for (let x = currentX; x < cols; x++) {
      grid[y][x] = thingToPutIn[y - currentY][x - currentX];
    }
  }
}
// function blocksFall(grid, thingToPutIn){
//   for (let location = 0; location < rows; location += dy){
//     copyStuff(grid, thingToPutIn);
//   }
// }
// trying to make the blocks fall still figure out what i have to change to get the blocks to move
function keyTyped(){
  if (key === 'a'){
    currentX -= 1;
  }
  if (key === 'd'){
    currentX += 1;
  }
  if (key === 's'){
    currentY += 1;
  }
}
function dropBlock(){
  console.log(currentY);
  if (currentY <= 15){
    currentY += 1;  
  }
  copyStuff(grid, Hero2, currentX, currentY);
}
//subtract the blocks height to make the blocks fall down