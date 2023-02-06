const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const elementsArr = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsArr.push(div);
  }
  return elementsArr;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createBtn.addEventListener("click", () => {
  let boxesToAdd = createBoxes(input.value);
  boxes.append(...boxesToAdd);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes.call();
});
