const boxes = document.querySelectorAll('.box');

//todo https://developer.mozilla.org/en-US/docs/Web/API/DOMRect
//todo https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

const checkBoxes = () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}
checkBoxes();
window.addEventListener('scroll', checkBoxes);