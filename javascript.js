const container = document.querySelector(".container");

let dimension = 10;
function color() {
  let r = Math.round(Math.random() * 256);
  let g = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function generatePad() {
  container.textContent = "";
  const pads = 720 / 2 / dimension;
  const sizeLabel = document.querySelector(".size");
  sizeLabel.textContent = `Canvas Size:${dimension}`;
  for (y = 0; y < dimension; y++) {
    for (i = 0; i < dimension; i++) {
      const pixels = document.createElement("div");
      pixels.classList.add("pixel");
      container.appendChild(pixels);
      pixels.style.padding = `${pads}px`;
    }
  }
  return;
}

function draw() {
  const pixel = document.querySelectorAll(".pixel");
  const grey = "rgb(128, 128, 128)";
  pixel.forEach((pixel) => {
    pixel.addEventListener("mouseenter", (e) => {
      const currentColor = window.getComputedStyle(pixel).backgroundColor;
      if (currentColor === grey) pixel.style.backgroundColor = color();
      else {
        //this is where the darken portion of the color would go.
      }
    });
  });
}

function button() {
  const button = document.querySelector(".button");
  button.addEventListener("click", function () {
    dimension = prompt(
      "To change your sketchpad size,enter a number between 1 - 100"
    );
    if (dimension > 100) dimension = 100;
    else if (dimension < 1) dimension = 1;

    generatePad();
    draw();
  });
}

generatePad();
draw();
button();
