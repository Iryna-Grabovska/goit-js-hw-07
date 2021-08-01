const categoriesEl = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(categoriesEls => {
  console.log(`Категория: ${categoriesEls.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${categoriesEls.querySelectorAll("li").length}`);
});

