const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
}

const blurring = () => {
  load += 5;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = `${1 - (load / 100)}`;
  // bg.style.filter = `blur(${scale(load, 0, 100, 30,0)}px)`
  bg.style.filter = `blur(${30 - load * 0.3}px)`;
}

let int = setInterval(blurring, 30);
