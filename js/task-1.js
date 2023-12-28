const categoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesList.length}`);

const categoriesContent = document.querySelectorAll("li.item h2");

categoriesContent.forEach((category) => {
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${category.nextElementSibling.children.length}`);
});
