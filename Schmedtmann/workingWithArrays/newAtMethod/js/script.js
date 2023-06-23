'use strict'

const arr = [23, 11, 64];

console.log(arr.at(2)); // = 64

//info last element of arr
const last1 = arr[arr.length -1];

//alt same as
const last2 = arr.slice(-1)[0];

//alt same as new at method
const last3 = arr.at(-1);

console.log(`${last1} = ${last2} = ${last3}`);
