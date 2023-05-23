'use strict';
const out = document.getElementById('out');
const out2 = document.getElementById('out2');

const calcAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
}

const calcAge2 = birthYear => new Date().getFullYear() - birthYear;

out.innerHTML = calcAge(1765);
out2.innerHTML = calcAge2(1970);

const yearsTilRetirement = birthYear => 65 - (new Date().getFullYear() - birthYear);

out2.innerHTML = yearsTilRetirement(1970);