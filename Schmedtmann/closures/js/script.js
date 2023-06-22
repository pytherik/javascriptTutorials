const secureBooking = function() {
  let passengerCount = 0;
  return function() {
    passengerCount++;
    console.log(`${passengerCount} Passagiere.`);
  }
}

const booker = secureBooking();

/*info  Closure
   die booker Funktion hat nach ihrer Erstellung
   weiter Zugang zum Variablen-Scope der Umgebung in
   der sie erstellt wurde, obwohl dieser Scope nicht
   mehr existiert
 */
booker();
booker();

console.dir(booker); // .dir zeigt u.a. alle scopes einer Funktion
