'use strict';

const timeContainer = document.querySelector('.time-container');
const hours = document.getElementById('hh');
const mins = document.getElementById('mm');
const secs = document.getElementById('ss');

// timeContainer.addEventListener('wheel', (e) => {
//   if (!(e.target.classList.contains('num'))) return;
//   if (e.deltaY < 0) {
//     +e.target.dataset.t++;
//     if (+e.target.dataset.t > +e.target.dataset.max) e.target.dataset.t = '00';
//   } else {
//     +e.target.dataset.t--;
//     if (+e.target.dataset.t < 0) e.target.dataset.t = e.target.dataset.max;
//   }
//   e.target.innerText = `0${e.target.dataset.t}`.slice(-2);
// });

timeContainer.addEventListener('wheel', (e) => {
  if (!(e.target.classList.contains('num'))) return;
  const arr = [];
  for(let i = 0; i < +e.target.dataset.max; i++) arr.push(`0${i}`.slice(-2));
  if (e.deltaY < 0) {
    +e.target.dataset.t++;
    if (+e.target.dataset.t > +e.target.dataset.max) e.target.dataset.t = '00';
  } else {
    +e.target.dataset.t--;
    if (+e.target.dataset.t < 0) e.target.dataset.t = e.target.dataset.max;
  }
  e.target.innerText = `0${e.target.dataset.t}`.slice(-2);
  console.log([...arr.slice(+e.target.dataset.t),
    ...arr.slice(0,+e.target.dataset.t)]);
});
