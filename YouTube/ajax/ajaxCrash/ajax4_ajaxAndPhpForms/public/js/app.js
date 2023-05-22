const btn = document.getElementById('button');
const getForm = document.getElementById('getForm');
const postForm = document.getElementById('postForm');

const getName = (e) => {
  e.preventDefault();
  const name = document.getElementById('name1').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `process.php?name=${name}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }
  xhr.send();
}

const postName = (e) => {
  e.preventDefault();
  const name = document.getElementById('name2').value;
  const params = "name="+name;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'process.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }
  xhr.send(params);
}


getForm.addEventListener('submit', getName);
postForm.addEventListener('submit', postName);
btn.addEventListener('click', getName);