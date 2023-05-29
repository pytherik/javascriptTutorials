const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.querySelector('#remained small');

const updateBigcup = () => {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;
  if(fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
  } else {
    const fillHeight = fullCups / totalCups;
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fillHeight * 330}px`;
    percentage.innerText = `${fillHeight * 100}%`;
    if (fillHeight === 1) {
      remained.innerText = '';
    } else {
      liters.innerText = `${(1 - fillHeight) * 2}L`;
    }
  }
}

updateBigcup();
const highlightCups = (idx) => {
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  })
  updateBigcup();
}

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
})