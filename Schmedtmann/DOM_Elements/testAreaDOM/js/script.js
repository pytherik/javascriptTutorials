'use strict'

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
hint.innerText = 'We got Mangos --- We got Water Mellons---'

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