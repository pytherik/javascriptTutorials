'use strict';
const interflug = {
  airline : 'Interflug',
  iataCode: 'IF',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} hat einen Platz bei ${this.airline} gebucht. Flug: ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})

  },
};

const book = interflug.book;

const ostflug = {
  airline : 'Ostflug',
  iataCode: 'OF',
  bookings: [],
};

const sturzflug = {
  airline : 'Sturzflug',
  iataCode: 'SF',
  bookings: [],
};

// neue Funktion mit bind method definiert
const bookIF = book.bind(interflug);
const bookOF = book.bind(ostflug);
const bookSF = book.bind(sturzflug);
bookIF(234, 'Hansi Pample');
bookOF(255, 'Erik Berndt');
bookSF(666, 'Gustav Gans');

// console.log(ostflug.bookings);
// console.log(interflug.bookings);
// console.log(sturzflug.bookings);

// bind noch weiter spezifizieren
// einen Parameter mit einbinde - partial application
const bookSF828 = book.bind(sturzflug, 828);

bookSF828('Susi Senkrecht');
// console.log(sturzflug.bookings);


interflug.planes = 200;

interflug.buyPlane = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

document
  .querySelector('.buy')
  .addEventListener('click', interflug.buyPlane.bind(interflug));

// partial application (preset parameters)
const addTax = (rate, value) => value + value * rate;

console.log(addTax(.1, 200));

const addVAT = addTax.bind(null, .23);

console.log(addVAT(100));