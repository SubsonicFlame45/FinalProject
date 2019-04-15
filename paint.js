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
let mouseIsDragging = false;
draw.mousedown(function() {
    mouseIsDragging = true;
})

draw.mouseup(function() {
    mouseIsDragging = false;
})

for (let i = 0; i < numRows; i++ ){
    let rowY = i * blockHeight;

    for (let j = 0; j < numBlocks; j++) {
    let blockX = j * blockWidth;
    
    let rect = {
        element: draw.rect(blockWidth, blockHeight),
        color: WHITE
    };

    rect.element.move(blockX, rowY);
    rect.element.stroke(WHITE);
    rect.element.fill(WHITE);
    rect.element.mouseover(function() {
        if (mouseIsDragging) {
            this.fill(currentColor);
        }
    }) 
    
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
document.getElementById("mahogany").onclick = function() {
    currentColor = '#951A00'
    console.log(currentColor)
} 
document.getElementById("black").onclick = function() {
    currentColor = '#000'
    console.log(currentColor)
}
document.getElementById("gray").onclick = function() {
    currentColor = '#808080'
    console.log(currentColor)
}
document.getElementById("burntOrange").onclick = function() {
    currentColor = '#D35400'
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
document.getElementById("turquoise").onclick = function() {
    currentColor = '#40e0d0'
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
document.getElementById("purple").onclick = function() {
    currentColor = '#4A235A'
    console.log(currentColor)
}

document.getElementById('eraseButton').onclick = function() {
    console.log('erasing');
    for (let i = 0; i < numRows; i++ ){
        let rowY = i * blockHeight;
    
        for (let j = 0; j < numBlocks; j++) {
        let blockX = j * blockWidth;
        
        let rect = {
            element: draw.rect(blockWidth, blockHeight),
            color: WHITE
        };
    
        rect.element.move(blockX, rowY);
        rect.element.stroke(WHITE);
        rect.element.fill(WHITE);
        rect.element.mouseover(function() {
            if (mouseIsDragging) {
                this.fill(currentColor);
            }
        }) 
        
        }
    }}
function colorUpdate()  {
    console.log(currentColor)
}
function colorFunction() {

    console.log("this works");
} } 