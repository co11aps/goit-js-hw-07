function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector("body");
const label = document.querySelector("span.color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  background.style.backgroundColor = color;
  label.textContent = color;
});
