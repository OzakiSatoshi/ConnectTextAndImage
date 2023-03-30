const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const appleImg = document.getElementById('apple-img');
const bananaImg = document.getElementById('banana-img');
const orangeImg = document.getElementById('orange-img');
const grapeImg = document.getElementById('grape-img');
const strawberryImg = document.getElementById('strawberry-img');

const appleText = document.getElementById('apple-text');
const bananaText = document.getElementById('banana-text');
const orangeText = document.getElementById('orange-text');
const grapeText = document.getElementById('grape-text');
const strawberryText = document.getElementById('strawberry-text');

let isDrawing = false;
let previousX;
let previousY;

function drawLine(startX, startY, endX, endY) {
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.stroke();
}

function handleMouseDown(event) {
  isDrawing = true;
  previousX = event.clientX;
  previousY = event.clientY;
}

function handleMouseMove(event) {
  if (isDrawing) {
    const currentX = event.clientX;
    const currentY = event.clientY;
    drawLine(previousX, previousY, currentX, currentY);
    previousX = currentX;
    previousY = currentY;
  }
}

function handleMouseUp() {
isDrawing = false;
}

appleImg.addEventListener('click', () => {
context.strokeStyle = 'red';
context.lineWidth = 5;
appleImg.classList.add('selected');
appleText.classList.add('selected');
});

bananaImg.addEventListener('click', () => {
context.strokeStyle = 'blue';
context.lineWidth = 5;
bananaImg.classList.add('selected');
bananaText.classList.add('selected');
});

orangeImg.addEventListener('click', () => {
context.strokeStyle = 'orange';
context.lineWidth = 5;
orangeImg.classList.add('selected');
orangeText.classList.add('selected');
});

grapeImg.addEventListener('click', () => {
context.strokeStyle = 'purple';
context.lineWidth = 5;
grapeImg.classList.add('selected');
grapeText.classList.add('selected');
});

strawberryImg.addEventListener('click', () => {
context.strokeStyle = 'pink';
context.lineWidth = 5;
strawberryImg.classList.add('selected');
strawberryText.classList.add('selected');
});

appleText.addEventListener('click', () => {
context.strokeStyle = 'red';
context.lineWidth = 5;
appleImg.classList.add('selected');
appleText.classList.add('selected');
});

bananaText.addEventListener('click', () => {
context.strokeStyle = 'blue';
context.lineWidth = 5;
bananaImg.classList.add('selected');
bananaText.classList.add('selected');
});

orangeText.addEventListener('click', () => {
context.strokeStyle = 'orange';
context.lineWidth = 5;
orangeImg.classList.add('selected');
orangeText.classList.add('selected');
});

grapeText.addEventListener('click', () => {
context.strokeStyle = 'purple';
context.lineWidth = 5;
grapeImg.classList.add('selected');
grapeText.classList.add('selected');
});

strawberryText.addEventListener('click', () => {
context.strokeStyle = 'pink';
context.lineWidth = 5;
strawberryImg.classList.add('selected');
strawberryText.classList.add('selected');
});

canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mouseup', handleMouseUp);
