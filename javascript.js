const container = document.querySelector(".container");

let panels = 0;
panels = 10;
for (i = 0; i < panels; i++) {
  const pixels = document.createElement("div");
  pixels.classList.add("pixel");
  pixels.textContent = "hello";
  container.appendChild(pixels);
}
