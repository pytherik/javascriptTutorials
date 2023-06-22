
(function() {
  const output = document.createElement('h1');
  output.innerText = 'Ich werde nie wieder erscheinen!';
  document.querySelector('body').insertAdjacentElement('beforeend',output);
})();

(() => console.log('Ich komme auch nie wieder!'))();