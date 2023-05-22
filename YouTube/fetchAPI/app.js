const url = 'https://reqres.in/api/users';
const url2 = 'https://reqres.in/api/users/23'; //info user 23 does not exist

//info returns a promise
console.log(fetch(url));

//info returns the response object with a body
// as a readable stream which is not directly accessable
fetch(url)
  .then(res => console.log(res));

//info res.json() returns another promise
// [[PromiseResult]] Object contains the data Array which can be read
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));

//info catch errors
fetch(url2)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

//info catch errors
fetch(url)
  .then(res => {
    if(res.ok) {
      console.log('Success');
      res.json();
    } else {
      console.log('Shit happens');
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log('error'));

fetch(url)
  .then(res => res.json())
  .then(data => {
    for(i in data) {
      console.log(data[i].first_name)
    }

  })
  .catch(error => console.log(error));
