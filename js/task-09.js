const body = document.querySelector("body");
const number = document.querySelector("span.color");
const button = document.querySelector("button.change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
  number.textContent = getRandomHexColor();
}

button.addEventListener("click", changeBackgroundColor);
