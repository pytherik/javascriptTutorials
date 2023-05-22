const users = document.querySelector('#users');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

loaduser = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);

  xhr.onload = function () {
    if (this.status === 200){
      console.log(this.responseText);
      const userJson = JSON.parse(this.responseText);
      let output = '';
      output += `
            <ul>
              <li>Id: ${userJson.id}</li>
              <li>Name: ${userJson.name}</li>
              <li>Email: ${userJson.email}</li>
            </ul> `
      user.innerHTML = `<h3>${output}</h3>`;
    }
  }
  xhr.onerror = function () {
    user.innerHTML = '<h3>An Error occurred!</h3>'
  }
  xhr.send();
}

loadusers = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);

  xhr.onload = function () {
    if (this.status === 200){
      console.log(this.responseText);
      const usersJson = JSON.parse(this.responseText);
      console.log(usersJson);
      let output = '';
      usersJson.forEach((user) => {
        output += `
            <ul>
              <li>Id: ${user.id}</li>
              <li>Name: ${user.name}</li>
              <li>Email: ${user.email}</li>
            </ul>`
      })
      users.innerHTML = `<h3>${output}</h3>`;
    }
  }
  xhr.onerror = function () {
    user.innerHTML = '<h3>An Error occurred!</h3>'
  }
  xhr.send();
}

btn1.addEventListener('click', loaduser);
btn2.addEventListener('click', loadusers);