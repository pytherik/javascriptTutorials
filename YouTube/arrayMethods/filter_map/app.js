const people = [
  {name: 'erik', email: 'erikberndt@gmx.net', age: 52},
  {name: 'oma', email: 'oma@home.net', age: 103},
  {name: 'schnulli', email: 'schnulli@hush.now', age: 2},
  {name: 'hansi', email: 'hansi@pampel.go', age: 33},
  {name: 'wolle', email: 'wolle@schaf.net', age: 44}
];

const filtered = people.filter((element) => {
  return element.age > 10;
})

const mapped = people.map(el => {
  return {name: el.name, email: el.email, age: el.age *  10};
})
console.log(people);

console.log(filtered);
console.log(mapped);