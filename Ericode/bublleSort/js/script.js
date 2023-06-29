'use strict'

const out = document.getElementById('out');

const sort = (...sortMe) => {
  for(let i=0; i < sortMe.length; i++) {
    sortMe.forEach((val, idx, arr) => {
        if (val > arr[idx+1]) {
          const tmp = arr[idx+1];
          arr[idx+1] = arr[idx];
          arr[idx] = tmp;
        }
    })
  }
  return sortMe;
}

const sortRev = (...sortMe) => {
  for(let i=0; i < sortMe.length; i++) {
    for (let j = 0; j < sortMe.length - i - 1; j++) {
      if (sortMe[j] < sortMe[j + 1]) {
        const tmp = sortMe[j + 1];
        sortMe[j + 1] = sortMe[j];
        sortMe[j] = tmp;
      }
    }
  }
  return sortMe;
}

const sorted = sort(5,6,1,3,21,2);
const sortedRev = sortRev(5,6,1,3,21,2);
console.log(sorted);
console.log(sortedRev);

//info geeks for geeks MusterCode
// Creating the bblSort function
// function bblSort(arr) {
//
//   for (let i = 0; i < arr.length; i++) {
//
//     // Last i elements are already in place
//     for (let j = 0; j < (arr.length - i - 1); j++) {
//
//       // Checking if the item at present iteration
//       // is greater than the next iteration
//       if (arr[j] > arr[j + 1]) {
//
//         // If the condition is true
//         // then swap them
//         const temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//
//   // Print the sorted array
//   console.log(arr);
// }
