const canvasWidth = 1000;
const canvasHeight = 1000;
const blockWidth = 10;
const blockHeight = 10;
const numBlocks = 140;
const numRows = 100;

let draw = SVG('drawing').size(canvasWidth, canvasHeight);

const WHITE = '#fff';
const BLACK = '#000';

for (let i = 0; i <numRows; i++ ){
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

x = 10
y = 10
for (let a = 0; a < 10; a++) {

}