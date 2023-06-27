'use strict'

//info number conversion and methods

console.log(23 === +'23'); // true

console.log(Number.parseInt(' 30px ')); // 30
console.log(Number.parseFloat(' 2.7 rem')); // 2.7

//info check if conversion results in NaN
console.log(Number.isNaN(+'erik')); // true
console.log(Number.isNaN(30 / 0));  // false (infinity !== NaN)
console.log(Number.isNaN('erik'));  // false (string !== NaN)
console.log(Number.isNaN(20));      // false (Number !== NaN)

//info better method for checking if value is a number
console.log(Number.isFinite('erik')); // false
console.log(Number.isFinite(20));     // true

console.log(Number.isInteger(23.234));// false
console.log(Number.isInteger(23));    // true

