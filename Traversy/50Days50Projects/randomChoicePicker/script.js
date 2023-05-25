const tagsEl = document.getElementById('tags');
const textarea = document.querySelector('.textarea');

textarea.focus();

const createTags = (input) => {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.className = 'tag';
      tagEl.innerText = tag;
      tagsEl.appendChild(tagEl);
    })
}

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags [Math.floor(Math.random() * tags.length)]
}

const highlightTag = (tag) => {
  tag.classList.add('highlight');
}

const unHighlightTag = (tag) => {
  tag.classList.remove('highlight');
}

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => unHighlightTag(randomTag), 100);
  }, 100)
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag);
    })
  }, times * 100)
}

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
  if (e.key === 'Enter') {
    setTimeout(() => e.target.value = '', 10);
    randomSelect();
  }
})

// const randomSelect = () => {
//   const tagEls = document.querySelectorAll('.tag');
//   let i = 0;
//   const int = setInterval(() => {
//     tagEls.forEach((tagEl) => tagEl.classList.remove('highlight'))
//     const highlight = Math.floor(Math.random() * tagEls.length)
//     console.log(highlight);
//     tagEls[highlight].classList.add('highlight');
//     i++;
//     if (i === 20) {
//       clearInterval(int);
//     }
//   }, 200);
// }
