let btn = document.querySelector('.sing');
let btn1 = document.querySelector('.sing1');
let image = document.querySelector('.image');
const data = [
  {
    id: 0,
    para: 'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded',
    span: 'Ayne Daly',
  },
  {
    id: 1,
    para: 'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
    span: 'John Kenneth Galbraith',
  },
  {
    id: 2,
    para: 'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we',
    span: 'Life',
  },
  {
    id: 3,
    para: 'A critic is someone who never actually goes< to the battle, yet who afterwards comes out shooting the wounded',
    span: 'Ayne Daly',
  },
];
textchange = function () {
  const randomIndex = Math.floor(Math.random() * data.length);
  const item = data[randomIndex];
  document.querySelector('.box-para').textContent = item.para;
  document.querySelector('.box-head1').textContent = item.span;
  image.src = `customer-${randomIndex}.jpg  `;
};
btn.addEventListener('click', textchange);
btn1.addEventListener('click', textchange);
