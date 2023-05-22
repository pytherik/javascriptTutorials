const names = [
  {first: 'Wiesje', last: 'Kolberg', age: 22},
  {first: 'Philippa', last: 'Rosendahl', age: 23},
  {first: 'Neah', last: 'Steck', age: 24},
  {first: 'Kimo', last: 'Seidel', age: 25},
  {first: 'Deniz', last: 'Schweiger', age: 26},
  {first: 'Zadie', last: 'Schroeder', age: 27},
  {first: 'Padma', last: 'Böhmer', age: 28},
  {first: 'Corvin', last: 'Schwab', age: 29},
  {first: 'Guilaume', last: 'Mack', age: 30},
  {first: 'Cuno', last: 'Riemann', age: 31}
];

//info found liefert ein gefundenes Objekt
const found = names.find(element => {
  return element.first === 'Kimo';
})

console.log(found);

//info some und every sin true oder false
const hasOldPeople = names.some(el => el.age > 25);

const isYoung = names.every(el => el.age < 40);

console.log(hasOldPeople);
console.log(isYoung);