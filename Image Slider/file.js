const imgChangebtn = document.querySelector('.button');
const image = document.querySelector('.image');

const imgChange = function () {
  let randm = Math.floor(Math.random() * 12) + 1;
  //   image.classList.add('hidden');
  image.src = `contBcg-${randm}.jpeg`;
};

imgChangebtn.addEventListener('click', imgChange);
//fatimaiqbal4489
