const categoriesElement = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesElement.length);

const categoriesDetalis = categoriesElement.forEach(elements => {
  //   console.log(elements);
  console.log('Category:', elements.firstElementChild.textContent);
  console.log('Elements:', elements.querySelectorAll('.item ul li').length);
});
