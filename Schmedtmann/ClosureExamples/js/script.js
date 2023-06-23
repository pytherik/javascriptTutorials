'use strict'

// alt Example 1 : Closures werden auch ohne return gebildet
/* info f wird nicht im Variablen Environment
    der Funktion g definiert, nimmt aber dessen
    Scope nach dem Aufruf von g() an.
 */
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 42;
  f = function() {
    console.log(b * 2);
  }
}

g(); //info nach dem Aufruf existiert das Variablen
     // Environment nicht mehr
f(); // f behält es dennoch weiter bei

h(); //info wenn nun f in einer weiteren Funktion
     // neu definiert wird übernimmt f wieder den
     // Scope der Funktion h() nach dessen Aufruf.

f();

//alt Example 2: Timer

const stressedPassengers = function(n, wait) {
  const perGroup = n / 3;
  //info auch die Callback-Funktion eines Timeouts ist
  // ein Closure, denn zum Zeitpunkt ihrer Ausführung
  // ist die stressedPassengers() Funktion schon tot.
  setTimeout(() => {
    console.log(`Zug bereit für ${n} Reisende...`);
    console.log(`Es sind 3 Gruppen mit ${perGroup} Reisenden.`);
  }, wait * 1000);
  console.log(`Zug verspätet sich um ${wait} Minuten...`);
}

// info die Variablenumgebung der Closure hat Priorität
//  vor dem Global Scope:
const perGroup = 300;
stressedPassengers(21, 4);

//alt Example 3: Eventlistener in IFFE
// (Immediately Invoked Function Execution)

(function() {
  const circle = document.createElement('div');
  circle.style.width = '100px';
  circle.style.height = '100px';
  circle.style.borderRadius = '50%';
  circle.style.background = 'lightblue';
  document.querySelector('body').insertAdjacentElement('beforeend', circle);
  document.querySelector('body').addEventListener('click',() => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    circle.style.background = `rgb(${r}, ${g}, ${b})`;
  });
})()