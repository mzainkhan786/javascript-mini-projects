const allBtn = document.querySelector('.btn-all');
const cakeBtn = document.querySelector('.btn-cake');
const cupcakeBtn = document.querySelector('.btn-cupcake');
const sweetBtn = document.querySelector('.btn-sweet');
const doughnutsBtn = document.querySelector('.btn-doughnuts');
const itemName = document.querySelector('.itemname');
const itemPrice = document.querySelector('.itemprice');
const itemsContainer = document.querySelector('.items-container');

//
const items = [
  {
    id: 1,
    name: 'Cake Item',
    category: 'CAKES',
    img: './cake-1.jpeg',
    price: 5,
  },
  {
    id: 1,
    name: 'Cake Item',
    category: 'CAKES',
    img: './cake-2.jpeg',
    price: 10,
  },
  {
    id: 1,
    name: 'Cake Item',
    category: 'CAKES',
    img: './cake-3.jpeg',
    price: 15,
  },
  {
    id: 1,
    name: 'CupCake Item',
    category: 'CUPCAKES',
    img: './cupcake-1.jpeg',
    price: 5,
  },
  {
    id: 1,
    name: 'CupCake Item',
    category: 'CUPCAKES',
    img: './cupcake-2.jpeg',
    price: 10,
  },
  {
    id: 1,
    name: 'CupCake Item',
    category: 'CUPCAKES',
    img: './cupcake-3.jpeg',
    price: 15,
  },
  {
    id: 1,
    name: 'Sweet Item',
    category: 'SWEETS',
    img: './sweets-1.jpeg',
    price: 5,
  },
  {
    id: 1,
    name: 'Sweet Item',
    category: 'SWEETS',
    img: './sweets-2.jpeg',
    price: 10,
  },
  {
    id: 1,
    name: 'Sweet Item',
    category: 'SWEETS',
    img: './sweets-3.jpeg',
    price: 15,
  },
  {
    id: 1,
    name: 'Doughnut Item',
    category: 'DOUGHNUTS',
    img: './doughnut-1.jpeg',
    price: 5,
  },
  {
    id: 1,
    name: 'Doughnut Item',
    category: 'DOUGHNUTS',
    img: './doughnut-2.jpeg',
    price: 10,
  },
  {
    id: 1,
    name: 'Doughnut Item',
    category: 'DOUGHNUTS',
    img: './doughnut-3.jpeg',
    price: 15,
  },
];

function showItems(itemsList) {
  const itemsHtml = itemsList
    .map(
      (item) =>
        `<article class="card card1">
        <div class="card-imgbox"><img src="${item.img}" alt="" /></div>
        <div class="card-textbox">
          <h2 class="itemname">${item.name}</h2>
          <h2 class="itemprice">$ ${item.price}</h2>
        </div>
      </article>`
    )
    .join('');

  itemsContainer.innerHTML = itemsHtml;
}
//
showItems(items);
const btns = [
  { element: cupcakeBtn, id: 'CUPCAKES' },
  { element: cakeBtn, id: 'CAKES' },
  { element: sweetBtn, id: 'SWEETS' },
  { element: doughnutsBtn, id: 'DOUGHNUTS' },
  { element: allBtn, id: '' },
];

btns.forEach((btn) => {
  const { element, id } = btn;
  element.addEventListener('click', () => {
    const filteredItems = items.filter((item) =>
      id === '' ? true : item.category === id
    );
    showItems(filteredItems);
  });
});
// cupcakeBtn.addEventListener('click', () => {
//   const cupcakeItems = items.filter((item) => item.category === 'CUPCAKES');
//   showItems(cupcakeItems);
//   //   SWEETS;
// });
// cakeBtn.addEventListener('click', () => {
//   const cakeItems = items.filter((item) => item.category === 'CAKES');
//   showItems(cakeItems);
// });
// sweetBtn.addEventListener('click', () => {
//   const sweetItems = items.filter((item) => item.category === 'SWEETS');
//   showItems(sweetItems);
// });

// doughnutsBtn.addEventListener('click', () => {
//   const doughnutsItems = items.filter((item) => item.category === 'DOUGHNUTS');
//   showItems(doughnutsItems);
// });
// allBtn.addEventListener('click', () => {
//   const doughnutsItems = items.filter((item) => item.id === 1);
//   showItems(doughnutsItems);
// });
