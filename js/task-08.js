const form = document.querySelector(".login-form");
const button = document.querySelector("button");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповнені!");
  }
  const userDetails = { email: email.value, password: password.value };

  console.log(userDetails);
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
