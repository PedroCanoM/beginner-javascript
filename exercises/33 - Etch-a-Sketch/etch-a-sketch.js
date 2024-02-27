
const MOVE_AMOUNT = 10;

// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector('.shake');

// set up our canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;


const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width);

let y = Math.floor(Math.random() * height);
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

// console.log(width, height);

// write a draw function

let hue = 0;
function draw({key}) {
    hue += 1;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y values depending on what the user did
    switch (key) {
        case "ArrowUp":
          y -= MOVE_AMOUNT;
          break;
        case "ArrowRight":
          x += MOVE_AMOUNT;
          break;
        case "ArrowDown":
          y += MOVE_AMOUNT;
          break;
        case "ArrowLeft":
          x -= MOVE_AMOUNT;
          break;
        default:
          break;
      }
    ctx.lineTo(x, y);
    ctx.stroke();
  }

// write a handler for the keys
function handleKey(e) {
    // e.preventDefault();

    if (e.key.includes("Arrow")) {
        e.preventDefault();
        draw({ key: e.key });
      }
  }
  window.addEventListener('keydown', handleKey);

// clear or shake function
function clearCanvas() {
    canvas.classList.add("shake");
    canvas.addEventListener("animationend", function() {
        console.log("done the shake!");
        canvas.classList.remove("shake");
      },
      { once: true }
    );
    ctx.clearRect(0, 0, width, height);
  }

shakebutton.addEventListener("click", clearCanvas);

// listen for arrow keys