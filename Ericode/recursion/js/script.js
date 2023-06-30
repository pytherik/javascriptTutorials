/*wiki Rekursive Funktionen
      Eine Funktion, die im Methodenrumpf sich selbst aufruft,
      nennt man rekursiv.
      Bsp: mathematische Funktion: Fakultät:
      5! = 5 * 4 * 3 * 2 * 1
         = 120
 */

let result;
function faculty(n) {
    if (n === 0) return 1;
    return  result = n * faculty(n - 1);
}

function facLoop(n) {
    let res = 1;
    for(let i = n; i > 0; i-- ) {
        res = res * (i);
    }
    return res;
}

function facWhile(n){
    let res = 1;
    while(n > 0) {
        res = res * n;
        n--;
    }
    return res;
}

console.log(facWhile(6));
console.log(faculty(6));
console.log(facLoop(6));