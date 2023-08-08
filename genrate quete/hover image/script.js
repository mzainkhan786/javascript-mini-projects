
let preveiwMenue = document.querySelector('.menu-preview');
let previewBox = preveiwMenue.querySelectorAll('.preview');

document.querySelectorAll('.menu-container .menu').forEach(product =>{
  product.onclick = () =>{
    preveiwMenue.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    preveiwMenue.style.display = 'none';
  };
});

//const linefirst = document.querySelector('.line1');
// const linesecond = document.querySelector('.line2');
// const linethird = document.querySelector('.line3');

// btnCake.addEventListener('click', function () {
//   linethird.classList.add('hidden');
//   linefirst.classList.remove('hidden');
//   linesecond.classList.remove('hidden');
// });
// btnCupcake.addEventListener('click', function () {
//   linethird.classList.add('hidden');
//   linesecond.classList.remove('hidden');
//   linefirst.classList.add('hidden');
// });
// btnSweet.addEventListener('click', function () {
//   linethird.classList.remove('hidden');
//   linesecond.classList.remove('hidden');
//   linefirst.classList.remove('hidden');
// });
// btnDoughnuts.addEventListener('click', function () {
//   linethird.classList.remove('hidden');
//   linesecond.classList.add('hidden');
//   linefirst.classList.add('hidden');
// });
// btnAll.addEventListener('click', function () {
//   linethird.classList.remove('hidden');
//   linesecond.classList.remove('hidden');
//   linefirst.classList.remove('hidden');
// });

