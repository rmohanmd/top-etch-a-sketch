const container = document.querySelector(".container");

let dimension = 25;

const pads = 720 / 2 / dimension;
for (y = 0; y < dimension; y++) {
  for (i = 0; i < dimension; i++) {
    const pixels = document.createElement("div");
    pixels.classList.add("pixel");
    container.appendChild(pixels);
    pixels.style.padding = `${pads}px`;
  }

  //   const lineBreak = document.createElement("div");
  //   lineBreak.classList.add("break");
  //   container.appendChild(lineBreak);
}
