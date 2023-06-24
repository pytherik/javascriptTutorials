'use strict'
// const test = document.getElementById('test');
// const restaurant = {
//   name: 'Zur Henkersmahlzeit',
//   location: 'Schmutzgasse 13, Stragele, Baden-Würggemberg',
//   categories: ['Deutsch', 'Hausmannskost', 'Fleisch', 'Eigener Stall'],
//   lastMeal: ['Blutwurst', 'Pellkartoffeln', 'Wurstsalat', 'Altbier'],
//   dessert: ['schlimme Augenwurst', 'kalter Hund', 'falscher Hase'],
//   openingHours: {
//     do: {
//       von: 12,
//       bis: 22
//     },
//     fr: {
//       von: 12,
//       bis: 24
//     },
//     sa: {
//       von: 0,
//       bis: 24
//     }
//   },
//   order: function(lastMealIdx, dessertIdx) {
//     return [this.lastMeal[lastMealIdx], this.dessert[dessertIdx]];
//   }
// }
// const {fr} = restaurant.openingHours;
// console.log(fr);
// test.innerText = `von:${fr.von} bis:${fr.bis}`;

//

const movs = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const withdrawals = movs => movs.filter(mov => mov < 0);
// console.log(withdrawals(movs));


// const pot = new Array(8).fill(Math.floor(Math.random() * 4));
// console.log(pot);
// const pot2 = pot.reduce((acc, val) => acc * val);
// console.log(pot2);

//info add all values
// console.log(movs.reduce((acc, val) => acc + val));
// //info find max value with reduce
// console.log(movs.reduce((acc, mov) => acc > mov ? acc: mov, movs[0]));

const euroToUSD = 1.1;
// console.log(movs.filter(mov => mov > 0).map(mov => mov * euroToUSD).reduce((acc, mov) => acc + mov).toFixed(2));
// console.log(movs.filter(mov => mov > 0).reduce((acc, mov) => acc + mov));

console.log(movs.find(mov => mov < 500));
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//info .includes checks for equality
console.log(movs);
console.log(movs.includes(-130));

//info .some checks for condition is any value true
console.log(movs.some(mov => mov > 0));
console.log(movs.some(mov => mov > 5550));

//info .every checks for condition is every value true
console.log(movs.every(mov => mov > 0));
console.log(movs.every(mov => mov < 5550));

//info flat method
const flatMe = [[1, 3, 2], [4, 5, 6], 7, 8];
console.log(flatMe.flat());

//info deeply nested arrays 
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat().flat());

//info flat depth here 3; depth set too high causes no error!
console.log(arrDeep.flat(5));

//info flatMap combines both .map and .flat methods
console.log(accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0));

//info flatMap has no depth level (always 2 dimensional)
console.log(accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0));

//info alphabetical sort
// .sort method mutates the original
const owners = accounts.map(acc => acc.owner);
console.log(owners.sort());

//info sort converts numbers to strings
// sorted numbers are not sorted numerically correct!
console.log(movs);
console.log(movs.sort());

//info number sort with compare callback function
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

//info sort ascending
// console.log(movs.sort((a, b) => {
//   if (a > b) return 1; (or any other positive number)
//   if (a < b) return -1; (or any other negative number)
// }));

//info improved sort
console.log(movs.sort((a, b) =>  a - b));

//info sort decending
// console.log(movs.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// }));
console.log(movs.sort((a, b) =>  b - a));

//info creating arrays 
// creates [empty x 7]
const x = new Array(7); 

//info fill the array with 7 times 23
x.fill(23);
console.log(x);

//info fill(value, first position until last position -1)
const y = x.fill(42, 3, 6); // [23, 23, 23, 42, 42, 42, 23]
console.log(y);

//info Array.from() creates an array from another array
const arrTo = [1, 3, 5, 6, 7];

const arrFrom = Array.from(arrTo);
console.log(arrFrom);

const z = Array.from({length: 9}, () => 1); // nine times 1

const w = Array.from({length: 10}, (current, i) => i + 1); // [1, 2, 3...10]
console.log(z);
console.log(w);

//info if a parameter is not needed use an underscore as a placeholder
// to signalize it to other programmers
const v = Array.from({length: 10}, (_, i) => i + 1); // [1, 2, 3...10]

//info 100 random dice rolls
const rand = Array.from({length: 100}, () => Math.round(Math.random() * 6)); // [1, 2, 3...10]
console.log(rand);

//------------------------------------------------//
//info more exercises on arrays

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, val) => sum + val, 0);
console.log(bankDepositSum);

const numAccounts1000 = accounts.map(acc => acc.movements)
  .filter(movs => movs
    .reduce((sum, val) => sum + val,0) > 1000).length;
console.log(numAccounts1000);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements) //info sum++ doesn't work here
  .reduce((sum, val) => val > 1000 ?  ++sum : sum, 0);
console.log(numDeposits1000);

//nice creating an object inside the reduce method
//info don't forget to return the accumulator in a function body
// with curly braces!!!
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, val) => {
    // val > 0 ? sums.deposits += val : sums.withdrawals += val;
    sums[val > 0 ? 'deposits': 'withdrawals']+= val;
    return sums;
  }, {deposits: 0, withdrawals: 0});
console.log(`Deposits:    ${deposits}\nWithdrawals: ${withdrawals}`);

//info convert title case

const convertTitleCase = (title) => {
  const exceptions = ['ein', 'in', 'ihr', 'der', 'das', 'die',
    'aus', 'mich', 'auf', 'im', 'mir', 'mich', 'ins', 'vom', 'von',
    'für', 'auch', 'oder', 'den'];

  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

  return title.toLowerCase().split(' ')
    .map((word, i) => (i > 0 && exceptions.includes(word)) ?
      word : capitalize(word)).join(' ');
}
console.log(convertTitleCase('ein tier in der schule'));
console.log(convertTitleCase('HOCH die TaSSEn voller Bier'));