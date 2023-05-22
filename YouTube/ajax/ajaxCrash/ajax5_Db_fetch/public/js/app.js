const users = document.querySelector('#users');
const btn1 = document.querySelector('.button1');


const loadUsers = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'getUsers.php', true);

  xhr.onload = function () {
    if (this.status === 200){
      const usersJson = JSON.parse(this.responseText);
      let output = '';
      usersJson.forEach((user) => {
        output += `
            <ul>
              <li>Id: ${user.id}</li>
              <li>Name: ${user.name}</li>
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

btn1.addEventListener('click', loadUsers);const user = document.querySelector('#user');
