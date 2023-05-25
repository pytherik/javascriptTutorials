const btn = document.getElementById('btn');

const translate = async () => {

  const url = 'https://rapid-translate.p.rapidapi.com/GetLanguages';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9585592331mshd42382d1f95fda8p16d579jsn1727b50494d2',
      'X-RapidAPI-Host': 'rapid-translate.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener('click', translate);