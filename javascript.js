const container = document.querySelector(".container");

let dimension = 10;

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
  pixel.forEach((pixel) =>
    pixel.addEventListener("mouseenter", (e) =>
      pixel.classList.add("highlight")
    )
  );
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
