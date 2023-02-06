const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const itemsArray = [];

ingredients.forEach((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.className = "item";
  ingredientEl.textContent = ingredient;
  itemsArray.push(ingredientEl);
});

ingredientsList.append(...itemsArray);
