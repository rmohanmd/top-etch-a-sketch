const wrapper = document.querySelector(".wrapper");

const panels = 0;
panels = 10;
for (i = 0; i < panels; i++) {
  const pixels = document.createElement("div");
  pixels.classList.add("colored");
  pixels.textContent = "hello";
  wrapper.appendChild(pixels);
}
