const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  })
})

//alt meine Lösung funktioniert auch
// const faqs = document.querySelectorAll('.faq');
// faqs.forEach(faq => {
//   faq.querySelector('.fas.fa-chevron-down').addEventListener('click', () => faq.classList.add('active'));
//   faq.querySelector('.fas.fa-times').addEventListener('click', () => faq.classList.remove('active'));
// })
