'use strict';

const timeSection = document.querySelector('.time-section');
const btnContainer = document.querySelector('.btn-container');

let tNum = 1;

const createAddSubmit = function() {
  const addSubmit = `    
    <button class='btn-submit submit'>Start</button>
    <button class='btn-submit add'>Zeit +</button>`;
  btnContainer.insertAdjacentHTML('beforeend', addSubmit);
};
const createInput = function(n) {
  const timerInput = `
      <span class='warning' data-warning='${n}'></span><br>
      <div class='input-time'>
      <label for='time'>std:min:sek</label><br>
      <input class='timer' type="text"
      placeholder='00:00:05' data-time='${n}'>
      </div>`;
  timeSection.insertAdjacentHTML('beforeend', timerInput);
};

const init = function() {
  createInput(tNum);
  createAddSubmit();
};

init();

const addTime = function() {
  const timeN = document
    .querySelector(`.timer[data-time="${tNum}"]`).value;
  if (!(timeN === '')) {
    tNum++;
    createInput(tNum);
  }
}

const getTimes = function() {
  const times = [];
  document.querySelectorAll('.timer').forEach((timer, idx) => {
    if(!timer.value.match(/^[0-9][0-9]:[0-5][0-9]:[0-5][0-9]$/)) {
      document.querySelector(`.warning[data-warning="${idx + 1}"]`)
        .innerText = 'bitte korrekte Zeit eintragen';
      return [];
    } else {
      times.push(timer.value);
    }
  })
  return times;
}

const startTimer = function(times){
  console.log('Started');
} 

btnContainer.addEventListener('click', (e) => {
  console.log(e.target);
  if (!(e.target.classList.contains('btn-submit'))) return;
  if (e.target.classList.contains('add')) {
    addTime();
  } else {
    const times = getTimes();
    if(times.length === 0) return;
    startTimer(times);
  }
});
