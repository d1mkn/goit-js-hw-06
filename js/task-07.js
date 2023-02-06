const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = () => {
  text.style.fontSize = `${range.value}px`;
};

range.addEventListener("input", changeFontSize);
