const numbersContainer = document.querySelector('.numbers');
const next = document.getElementById('next');
const calc = document.getElementById('calc');
const result = document.querySelector('.out');

const getNumbers = () => {
  return document.querySelectorAll('.number');
}

const removeAutofocus = () => {
  const numbers = getNumbers();
  numbers.forEach(number => number.setAttribute('autofocus', 'off'));
}
next.addEventListener('click', () => {
  removeAutofocus();
  const num = document.createElement('input');
  num.className = 'number';
  num.type = 'number';
  num.min = '6';
  num.max = '6';
  num.autofocus = true;
  num.autocomplete = 'off';

  numbersContainer.appendChild(num);
  setTimeout(() => num.classList.add('show'), 5);
})

calc.addEventListener('click', () => {
  const numbers = getNumbers();
  let total = 0;
  console.log(numbers.length);
  numbers.forEach((number) => {
    total += Number(number.value);
  })
  result.innerHTML = `${total / numbers.length}`;
})
