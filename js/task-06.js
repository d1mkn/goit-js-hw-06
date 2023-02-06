const textInput = document.querySelector("#validation-input");
const dataLength = textInput.dataset.length;

textInput.addEventListener("blur", (event) => {
  if (textInput.value.length == dataLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
  if (textInput.value.length != dataLength) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
