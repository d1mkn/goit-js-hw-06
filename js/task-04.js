let counterValue = document.querySelector("#value");
let currentValue = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

increment.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
