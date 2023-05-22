const button = document.getElementById('button');


const loadText = () => {
  //info  create XHR Object
  const xhr = new XMLHttpRequest();
  //info OPEN - type, url/file, async
  xhr.open('GET', 'sample.txt', true);
  console.log('readyState: ', xhr.readyState);

  //info Optional used for loaders
  // xhr.onprogress = function () {
  // console.log('readyState: ', xhr.readyState);
  // }

  xhr.onload = function () {
  //info onload not running unless readyState = 4
  console.log('readyState: ', xhr.readyState);
    if (this.status === 200) {
      console.log(xhr);
      document.querySelector('.text').innerHTML = this.response;
    } else if (this.status === 404) {
      document.querySelector('.text').innerHTML = '<h1>NOT FOUND</h1>';
    }
  }
  /*alt deprecated:
     xhr.onreadystatechange = function () {
     // macht alle readyState checks
     console.log('readyState: ', xhr.readyState);
     if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      }
      }
 */
  xhr.onerror = function() {
    console.log('Request ERROR...');
  }
  //info send request
  xhr.send();
}

button.addEventListener('click', loadText);

/*wiki
   readyState Values:
   0:request not initialized
   1: server connection established
   2: request received 3: processing request
   4: request finished and response is ready
   ----
   HTTP Statuses:
   200: okay
   403: forbidden
   404: not found
 */