const amount = document.querySelector("#controls input");
const target = document.querySelector("div#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
createBtn.classList.add("create-btn");
destroyBtn.classList.add("destroy-btn");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(number) {
  let height = 30;
  let width = 30;
  let output = "";
  for (let i = 0; i < number; i++) {
    const color = getRandomHexColor();
    const div = `<div style=background-color:${color};height:${height}px;width:${width}px;></div>`;
    height += 10;
    width += 10;
    output += div;
  }
  target.innerHTML = output;
}

const destroyBoxes = () => {
  target.innerHTML = "";
  amount.value = "";
};

const handleCreateClick = () => {
  if (amount.value >= 1 && amount.value <= 100) {
    createBoxes(amount.value);
    amount.value = "";
  }
};

createBtn.addEventListener("click", handleCreateClick);
destroyBtn.addEventListener("click", destroyBoxes);
