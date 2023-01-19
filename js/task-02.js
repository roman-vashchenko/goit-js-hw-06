const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulElement = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const ulItem = document.createElement('li');
  ulItem.textContent = ingredient;
  ulItem.classList.add('item');
  ulElement.appendChild(ulItem);
}
