'use strict';

const setTimer = document.querySelector('.set-timer');
const hours = document.getElementById('hh');
const mins = document.getElementById('mm');
const secs = document.getElementById('ss');



setTimer.addEventListener('wheel', (e) => {
  if (!(e.target.classList.contains('num'))) return;
  e.deltaY < 0
    ? e.target.dataset.t++
    : e.target.dataset.t--;
  if(+e.target.dataset.t > 59)  e.target.dataset.t = '00';
  if(+e.target.dataset.t < 0)  e.target.dataset.t = '59';
  e.target.innerText = `0${e.target.dataset.t}`.slice(-2);
});


