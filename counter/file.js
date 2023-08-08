const counterEelement = document.querySelector('.count');
const resetbtn = document.querySelector('.reset');
const nextbtn = document.querySelector('.next');
const backbtn = document.querySelector('.back');

function changeColor() {
  const counter = +counterEelement.innerText;
  counterEelement.style.color = counter > 0 ? 'blue' : 'red';
}

resetbtn.addEventListener('click', function () {
  counterEelement.textContent = 0;
});
increment = function () {
  const add = Number(counterEelement.textContent) + 1;
  counterEelement.textContent = add;
  changeColor();
};
decrement = function () {
  const subtract = Number(counterEelement.textContent) - 1;
  counterEelement.textContent = subtract;
  changeColor();
};
nextbtn.addEventListener('click', increment);
backbtn.addEventListener('click', decrement);

changeColor();
// Number(count.textContent) <= 0
//   ? (count.style.color = 'red')
//   : (count.style.color = 'blue');
