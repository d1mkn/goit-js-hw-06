const nameInput = document.querySelector("#name-input");
const greetingName = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  greetingName.textContent = nameInput.value;
  if (nameInput.value === "") {
    greetingName.textContent = "Anonymous";
  }
});
