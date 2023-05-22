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


const totalAge = names.reduce((currentTotal, name) => {
  return name.age + currentTotal;
}, 0); //info 0 setzt den Startwert von currentTotal

console.log(totalAge);
