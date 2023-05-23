const panels = document.querySelectorAll('.panel');

const getPicInfo = async(seedValue) => {

try {
  let result = await fetch(`https://picsum.photos/seed/${seedValue}/info`);
  result = await result.json();
  return result;
} catch(err) {
  console.log(err)
}
}

panels.forEach( async (panel) => {
  const pic = await getPicInfo(Math.random()*10000);
  panel.style.backgroundImage = `url(${pic.download_url})`;
  panel.querySelector('h3').innerHTML = `${pic.author}`;
  panel.querySelector('span').innerHTML = `${pic.download_url}`;
})

const removeActiveClasses = () => {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active')
  })
})


