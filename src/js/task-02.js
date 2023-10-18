const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = [];

for (const ingredient of ingredients) {
  console.log(ingredient);
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  ingredientsList.push(ingredientItem);
}

document.querySelector("#ingredients").append(...ingredientsList);
