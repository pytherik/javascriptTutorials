'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('[data-src]');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//info button smooth scrolling to section 1
btnScrollTo.addEventListener('click', (e) => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*wiki event delegation:
   1. Add event listener to common parent element
   2. Determine what element originated the event
 */

document.querySelector('.nav__links').addEventListener(
  'click', function(e) {
    e.preventDefault();

    //info matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

//info Tabbed component

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');
  //info guard clause
  if (!clicked) return; // more modern
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//info Menu fade animation

const handleHover = function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//info passing an "argument" into a handler function
// handler functions can only take one argument
// so binding a value on a handler funktion is a workaround
// to bring in other arguments than (e)
nav.addEventListener('mouseover', handleHover.bind('0.5'));
nav.addEventListener('mouseout', handleHover.bind('1'));
// nav.addEventListener('mouseover', e => handleHover(e, '0.5'))
// nav.addEventListener('mouseout', e => handleHover(e, '1'))

//info Sticky navigation

const initialCoords = section1.getBoundingClientRect();

// //info working but bad performance!!
// window.addEventListener('scroll', function() {
//   window.scrollY > initialCoords.top ?
//     nav.classList.add('sticky') : nav.classList.remove('sticky');
// })

//info Intersection Observer API

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entries) {
  const [entry] = entries;
  entry.isIntersecting ?
    nav.classList.remove('sticky') : nav.classList.add('sticky');
};
const headerObserver = new IntersectionObserver
(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);

//info fade in sticky navbar
const hiddenNav = function(entries) {
  const [entry] = entries;
  entry.isIntersecting
    ? nav.classList.remove('nav-hidden') : nav.classList.add('nav-hidden');
};

const navObserver = new IntersectionObserver(
  hiddenNav, {
    root: null,
    threshold: 0
  });
navObserver.observe(nav);

//info Reveal Sections

const revealSection = function(entries, observer) {
  const [entry] = entries;
  entry.isIntersecting ?
    entry.target.classList.remove('section--hidden') : entry.target.classList.add('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1
});
allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

//info Lazy loading images

const imgUnblur = function(entries, observer) {
  const [entry] = entries;
  const img = entry.target;
  if (!entry.isIntersecting) return;

  img.src = img.dataset.src;
  img.addEventListener('load', e => img.classList.remove('lazy-img'));
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(imgUnblur, {
  root: null,
  threshold: 1,
  //info to load images before they come to sight:
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

//info Slider

const imgSlider = () => {

  //info Functions
  const createDots = function() {
    slides.forEach((slide, i) => {
      const dot = document.createElement('button');
      dot.className = 'dots__dot';
      dot.dataset.slide = `${i}`;
      dotContainer.insertAdjacentElement('beforeend', dot);
    });
  };

  const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const maxSlide = slides.length - 1;
  let curSlide = 0;

  const slidersSlide = function(slide) {
    activateDot(slide);
    slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide) * 100}%)`);
  };

  const prevSlide = () => {
    curSlide > 0 ? curSlide-- : curSlide = maxSlide;
    slidersSlide(curSlide);
  };

  const nextSlide = () => {
    curSlide < maxSlide ? curSlide++ : curSlide = 0;
    slidersSlide(curSlide);
  };

  const init = () => {
    createDots();
    slidersSlide(curSlide);
  };

  init();

  //info Event Handlers
  btnRight.addEventListener('click', () => nextSlide());
  btnLeft.addEventListener('click', () => prevSlide());

  document.addEventListener('keydown', e => {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  dotContainer.addEventListener('click', function(e) {
    const { slide } = e.target.dataset;
    slidersSlide(slide);
  });

};

imgSlider();
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// //info button smooth scrolling to section 1
// btnScrollTo.addEventListener('click', (e) => {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   console.log('Current Scroll (X/Y): ', window.pageXOffset, pageYOffset);
//   console.log('height/width viewport: ', document.documentElement.clientHeight, document.documentElement.clientWidth);
//
//   section1.scrollIntoView({behavior: 'smooth'});
//   //info deprecated scrollTo
//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth'})
// });


// //info page navigation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   })
// })

///////////////////////////////////////////////

// //nice DOM Traversing
//
// const h1 = document.querySelector('h1');
//
// //info going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
//
// //info childnodes includes every content (comments, text...)
// // use indexing to get hold of a specific node
// console.log(h1.childNodes[1]);
//
// //info children contains HTMLCollection (only for direct children)
// console.log(h1.children);
//
// //info firstElementChild = span.highlight
// h1.firstElementChild.style.color = '#883300';
//
//
// //info going upwards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
//
// //info set custom property for closest .header element
// // use .closest for event-delegation
// console.log(h1.closest('.header'));
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
//
// /*wiki
//     querySelector selects child elements,
//     closest selects parent elements
//  */
//
// //info going sideways: siblings
// console.log(h1.previousElementSibling); // null because h1 is the first child element
// console.log(h1.nextElementSibling);
//
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
//
// //info to get all siblings, move to parent element and get its children
// console.log(h1.parentElement.children);// also includes itself
//
// // spread operator to convert nodeList to array
// [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1) el.style.transform = 'scale(0.5)'
// });

// //nice Intersection Observer API
//
// const obsCallback = function(entries, observer) {
//     entries.forEach(ent => console.log(ent))
// };
//
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };
//
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('HTML parsed and DOM tree built!');
  console.log(e);
})

window.addEventListener('load', function(e) {
  console.log('Page finished loading!');
  console.log(e);
})

// window.addEventListener('beforeunload', function(e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// })