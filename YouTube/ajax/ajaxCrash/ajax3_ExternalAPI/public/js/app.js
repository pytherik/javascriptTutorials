const btn = document.querySelector('#button');
const users = document.querySelector('#users');

//info load GitHub Users
const loadUsers = () => {
  const xhr = new XMLHttpRequest();
  const url = 'https://api.github.com/users';
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const usersGit = JSON.parse(this.responseText);
      console.log(users);
      let output = '';
      usersGit.forEach((user) => {
        output += `
          <div class="gitUser">
            <img src="${user.avatar_url}" width="100" height="100">
            <ul>
              <li>Id: ${user.id}</li>
              <li>Login: ${user.login}</li>
              <li>Repos Url: ${user.repos_url}</li>
            </ul>
          </div>`
      })
      users.innerHTML = output;
    }
  }
  xhr.send();
}

btn.addEventListener('click', loadUsers);