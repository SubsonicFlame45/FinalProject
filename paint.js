const canvasWidth = 1000;
const canvasHeight = 1000;
const blockWidth = 10;
const blockHeight = 10;
const numBlocks = 140;
const numRows = 100;

let draw = SVG('drawing').size(canvasWidth, canvasHeight);

const WHITE = '#fff';
const BLACK = '#000';
let currentColor = '#000';
for (let i = 0; i < numRows; i++ ){
    let rowY = i * blockHeight;

    for (let j = 0; j < numBlocks; j++) {
    let blockX = j * blockWidth;
    
    let rect = {
        element: draw.rect(blockWidth, blockHeight),
        color: WHITE
    };

    rect.element.move(blockX, rowY);
    rect.element.stroke(BLACK);
    rect.element.fill(WHITE);
    }
}
document.getElementById("black").onclick = function() {
    currentColor = '#000'
    console.log(currentColor)
}
document.getElementById("white").onclick = function() {
    currentColor = '#fff'
    console.log(currentColor)
}
document.getElementById("red").onclick = function() {
    currentColor = '#ff0000'
    console.log(currentColor)
}
document.getElementById("black").onclick = function() {
    currentColor = '#000'
    console.log(currentColor)
}
document.getElementById("orange").onclick = function() {
    currentColor = '#ffa500'
    console.log(currentColor)
}
document.getElementById("yellow").onclick = function() {
    currentColor = '#ffff00'
    console.log(currentColor)
}
document.getElementById("green").onclick = function() {
    currentColor = '#008000'
    console.log(currentColor)
}
document.getElementById("blue").onclick = function() {
    currentColor = '#0000ff'
    console.log(currentColor)
}
document.getElementById("violet").onclick = function() {
    currentColor = '#ee82ee'
    console.log(currentColor)
}
function colorUpdate()  {
    console.log(currentColor)
}
function colorFunction() {
    
    console.log("this works");
} 