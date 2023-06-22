'use strict';

const testAnswers = {
  answers: [1, 2, 5, 2]
}

const poll = {
  question: 'Welcher ist dein Lieblinsbuchstabe?',
  options: ['0: a', '1: e', '2: p', '3: ß'],
  answers: new Array(4).fill(0),
  createOutput() {
    return `${this.question}\n${this.options.join('\n')}`;
  },
  registerAnswer() {
    const answer = Number(prompt(this.createOutput()));
    typeof answer === 'number' &&  // && operator anstelle einer if abfrage
    answer < this.answers.length &&
    this.answers[answer]++;
    this.displayResults();
  },
  displayResults() {
    this.answers.forEach((ans, idx) => {
      console.log(`${this.options[idx]} = ${ans}`);
    })
  },
  displayTest() {
    this.answers.
    forEach((ans, idx) => console.log(`Answer ${idx}: ${ans}`));
  }
}

document.getElementById('poll')
  .addEventListener('click', poll.registerAnswer.bind(poll));

console.log(poll.displayTest.bind(testAnswers)());