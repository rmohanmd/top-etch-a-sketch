const container = document.querySelector(".container");

let dimension = 100;

const pads = 720 / 2 / dimension;
for (y = 0; y < dimension; y++) {
  for (i = 0; i < dimension; i++) {
    const pixels = document.createElement("div");
    pixels.classList.add("pixel");
    container.appendChild(pixels);
    pixels.style.padding = `${pads}px`;
  }
}

const pixel = document.querySelectorAll(".pixel");
pixel.forEach((pixel) =>
  pixel.addEventListener("mouseenter", (e) => pixel.classList.add("highlight"))
);
