const inputGet = document.querySelector('.inputGet');
const message = document.querySelector('.message');
const submitbtn = document.querySelector('.submitbtn');
const emptyDef = document.querySelector('.emptyDef');

const checkMe = () => {
  if (inputGet.value === '') {
    emptyDef.classList.remove('hidden');
  } else {
    emptyDef.classList.add('hidden');
    message.textContent = inputGet.value;
  }
};

submitbtn.addEventListener('click', checkMe);
