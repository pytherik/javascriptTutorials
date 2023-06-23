'use strict'

const diagrams = new Map([
  ['sd', 'sequence diagram'],
  ['ud', 'use case diagram'],
  ['ud', 'use case diagram'],
  ['ad', 'activity diagram']
]);

diagrams.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
})

const diagramsUniq = new Set(['ud', 'sd', 'ud', 'ad']);
console.log(diagramsUniq);

//info sets haben weder index noch key, dennoch existieren
// die Parameter dafür weiterhin in der forEach Schleife.
// Die value wird einfach dupliziert:
diagramsUniq.forEach((value, key, set) => {
  console.log(`${key} : ${value}`);
})