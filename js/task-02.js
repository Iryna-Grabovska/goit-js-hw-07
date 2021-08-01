const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector("#ingredients")
const ingredientsRefs = ingredients.map(ingredient => {
  const addItems = document.createElement("li");
  addItems.textContent = ingredient;
  console.log(addItems);
  return addItems;

});

ul.append(...ingredientsRefs);
