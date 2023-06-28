'use strict';

//nice Selecting elements

//info Für manche DOM Elemente wird kein Selector benötigt:
const docElement = document.documentElement;
const head = document.head;
const body = document.body;

console.log(docElement);
console.log(head);
console.log(body);

//info Die üblichen Verdächtigen und andere mehr:
const heading1 = document.getElementById('head-h1');
const heading3 = document.querySelector('.head-h3');

//info returns a nodelist, an array-like object
const sections = document.querySelectorAll('.section');
console.log(sections);

//info returns an html collection, updates automatically
const buttons = document.getElementsByTagName('button');
console.log(buttons);
const sectionsByclass = document.getElementsByClassName('section');
console.log(sectionsByclass);


//nice Creating elements

const message = document.createElement('div');
message.classList.add('head-h1');
message.innerText = 'Welcome to my beautiful website!';

sections[1].prepend(message);

const hint = document.createElement('div');
hint.classList.add('head-h3');
hint.innerText = 'We got Mangos --- We got Water Mellons---';

sections[0].append(hint);
//info DOM elements are unique,
// so the 'hint' element gets only moved, not copied!!
sections[0].prepend(hint);

//info but the node and its child elements can be
// cloned and then duplicated
sections[2].append(hint.cloneNode(true));

//info more application methods : .before / .after

hint.remove();
//info old way of removing (DOM traversing)
// hint.parentElement.removeChild(hint);

//nice Working with Styles, Computed Style

message.style.background = '#202020';

//info getting values from element styles
console.log(message.style.background);
console.log(getComputedStyle(message).color);

//info parseFloat to get rid of 'px' from value for calculation
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

//nice getting and changing values from :root

document.documentElement.style.setProperty('--primary-bg', '#342345');

//nice getting and setting attributes

const pic = document.getElementById('rand-pic');
//info pic.src gets the absolute path
console.log('attr. abs src: ', pic.src);

//info  pic.getAttribute gets the relative path
console.log('attr. rel src: ', pic.getAttribute('src'));

console.log('attribute alt: ', pic.alt);
console.log('attribute id : ', pic.id);

//info non-standard attributes:
console.log('attr. designer: ', pic.getAttribute('designer'));

// pic.src = '../DOM-Diagram.png';
pic.setAttribute('designer', 'erik');

//info data attributes
console.log('data attribute from dataset: ', pic.dataset.versionNumber);

/*wiki classes:
    pic.classList.add('class-a', 'class-b');
    pic.classList.remove('class-a', 'class-b');
    pic.classList.toggle('class-c');
    pic.classList.contains('class-a');
    -- overrides existing classes, use carefully:
    pic.className = 'class-a class-b';
 */

pic.className = 'class-a class-b';

//nice location of elements and window scroll

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y): ', window.pageXOffset, pageYOffset);
  console.log('height/width viewport: ', document.documentElement.clientHeight, document.documentElement.clientWidth);
});


//nice events and event Handlers
const head1 = document.querySelector('.head-h1');

//info addEventHandler kann man mehrfach mit
// verschiedenen functions auf ein Element anwenden,
// während onmouse Events überschrieben werden.

//info wenn man mehrere functions braucht:
// named functions verwenden!
const alertH1 =(e) => {
  alert('mouseenter happening');
  //info alertH1 wird nach erstem Eintreten wieder entfernt
  head1.removeEventListener('mouseenter', alertH1);
}
head1.addEventListener('mouseenter', alertH1);


//info oldschool deprecated
// head1.onmouseenter = function(e) {
//   alert('Mouseenter h1');
// };

//nice event propagation in practice
// (capturing and bubbling)

//info by default event listeners react to bubbling events,
// capturing events are ignored

//info random number generator
const randomInt = (min, max) =>
  Math.floor(Math.random() *
    (max - min) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.getElementById('btn-3').addEventListener('click', function(e) {
  console.log('click btn3', e.target, e.currentTarget);
  this.style.background = randomColor();
  console.log(e.currentTarget === this);
  //info stop propagation, in general not a good idea
  // but in specific cases may solve problems
  e.stopPropagation();
})

document.getElementById('section--1').addEventListener('click', function(e) {
  console.log('click sec1', e.target, e.currentTarget);
  this.style.background = randomColor();
  console.log(e.currentTarget === this);
  //info by setting the third property of the eventListener to true,
  // it will react on capturing events
}, true)

document.querySelector('.testing').addEventListener('click', function(e) {
  console.log('click div.testing', e.target, e.currentTarget);
  this.style.background = randomColor();
  console.log(e.currentTarget === this);
})
