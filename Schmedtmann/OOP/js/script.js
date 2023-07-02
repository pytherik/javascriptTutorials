'use strict'

//info hier kann keine arrow function verwendet werden,
// weil sie kein eigenes this Keyword besitzt
const Person = function(firstname, birthyear) {
  this.firstname = firstname; // instance property
  this.birthyear = birthyear; // instance property

  //info FALSCH: in der constructor function werden
  // KEINE Methoden erstellt
  // this.calcAge = function() {
  //   console.log(2023 - this.birthyear);
  // }
}

const erik = new Person('Erik', 1970);
console.log(erik);

/* wiki Neues Objekt Person
    1. Neues {} ist erstellt
    2. Funktion wird aufgerufen, this = {}
    3. {} zu Prototype verlinkt - erstell __proto__ property
    4. Funktion automatischer return {}
 */

const matilda = new Person('matilda', 1999);
const hansi = new Person('hansi', 2001);

console.log(matilda, hansi);

console.log(erik instanceof Person);

const schnuffi = 'Schnuffi';
console.log(schnuffi instanceof Person);

//info Prototypes Methoden und Eigenschaften erstellen
Person.prototype.calcAge = function() {
  console.log(2023 - this.birthyear);
}

Person.prototype.species = 'Human';
console.log(erik.species);
console.log('Person.hasOwnProperty("species")', Person.hasOwnProperty('species'));

//info durch prototypal inheritance können die Person Objekte
// nun auf die Methode calcAge() zugreifen, diese ist jedoch
// nicht Bestandteil der einzelnen Objekte. So gibt es keine
// kopien für jede einzelne Instanz!
erik.calcAge();
hansi.calcAge();
matilda.calcAge();

//info jedes Objekt hat zugriff auf alle Methoden seines prototypes
console.log(Person.prototype);

//info man kann sogar vordefinierte prototypes um Methoden erweitern,
// sodass auf arrays eine neue Methode logContent() erstellt wird die
// für jedes erstellte array zugänglich ist.
Array.prototype.logContent = function() {
  this.forEach(item => console.log(`${item}\n`))
}

Array.prototype.species = 'sowas wie ne Liste';

const checkMethod = ['Erik', 'Matilde', 'Hansen'];
checkMethod.logContent();
console.log(checkMethod.species);
console.log('Array.hasOwnProperty("species")', Array.hasOwnProperty('species'));
//info .__proto__ zeigt den prototype einer Instanz an
console.log(erik.__proto__);
console.log(erik.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(erik));

console.log(checkMethod.__proto__);
console.log(checkMethod.__proto__ === Array.prototype);
console.log(Array.prototype.isPrototypeOf(checkMethod));

//info prototype ist nur der Prototyp des verlinkten Objektes
console.log(Array.prototype.isPrototypeOf(Array)); // false

//info Prototype chain

// erster in chain
console.log(erik.__proto__);
// nächster ist Prototype Objekt
console.log(erik.__proto__.__proto__);
// hier ist schluss: null
console.log(erik.__proto__.__proto__.__proto__);

//info constructor zeigt die Person constructor Funktion selbst
console.log(Person.prototype.constructor);

console.dir(Person.prototype.constructor);

//info DOM Elements
const h1 = document.querySelector('h1');

console.dir(h1);

console.dir(x => x + 1);

const Bikes = function(brand, gears) {
  this.brand = brand;
  this.gears = gears;
}

Bikes.prototype.speed = 0;

Bikes.prototype.accellerate = function() {
  if(this.speed < 40){
    this.speed += 5;
    console.log(`New Speed = ${this.speed}`);
  } else {
    console.log(`You reached MaxSpeed: ${this.speed}`);
  }
}
Bikes.prototype.brake = function() {
  if(this.speed > 0){
    this.speed -= 5;
    console.log(`New Speed = ${this.speed}`);
  } else {
    console.log(`You're standing still: ${this.speed}`);
  }
}

const ulrich = new Bikes('Kalkhoff', 3);
const armstrong = new Bikes('Rabeneick', 1);

ulrich.accellerate();
ulrich.accellerate();
ulrich.accellerate();
ulrich.accellerate();
ulrich.accellerate();
ulrich.accellerate();
ulrich.accellerate();
ulrich.accellerate();
ulrich.accellerate();

armstrong.accellerate();
armstrong.accellerate();
armstrong.accellerate();
armstrong.accellerate();
armstrong.brake();
armstrong.brake();
armstrong.brake();
armstrong.brake();
armstrong.brake();
armstrong.brake();
armstrong.brake();