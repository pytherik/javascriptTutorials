let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve('Success');
  }else {
    reject('Failed');
  }
});

p.then((message) => {
  console.log('This is in the then: ' + message);
}).catch((message) => {
  console.log('This is in the catch: ' + message);
})


//info callback hell
const userLeft = false;
const userWatchingCatMemes = false;

const watchTutorialCallback = (callback, errorCallback) => {
  if (userLeft){
    errorCallback({
      name: 'UserLeft',
      message: ':('
    })
  } else if (userWatchingCatMemes) {
    errorCallback({
      name: 'SupiDupi',
      message: ':)'
    });
  } else {
    callback('You Win the SlimeAward!');
  }
}

watchTutorialCallback((message) => {
  console.log('Success: ' + message);
}, (error) => {
  console.log(error.name + ' ' + error.message);
});

//info better with promises
const watchTutorialPromise = () => {
  return new Promise((resolve, reject) => {
  if (userLeft){
    reject({
      name: 'UserLeft',
      message: ':('
    })
  } else if (userWatchingCatMemes) {
    reject({
      name: 'SupiDupi :)',
      message: 'Go home'});
  } else {
    resolve('You Win the SlimeAward!')
  }
  })
}

watchTutorialPromise().then((message) => {
  console.log('Success: ' + message);
}).catch((error) => {
  console.log(error.name + ' ' + error.message);
});


//info Promise.all

const eatCake1 = new Promise((resolve, reject) => {
  resolve('Cake 1 was eaten :)');
})

const eatCake2 = new Promise((resolve, reject) => {
  resolve('Cake 2 eaten too:|');
})

const eatCake3 = new Promise((resolve, reject) => {
  resolve('Cake 3 was eaten :(');
})

//info waits for all Promises to be completed and
// takes all messages as an array
Promise.all([
  eatCake1,
  eatCake2,
  eatCake3
]).then((messages) => {
  console.log(messages);
})

//info gets the message of the first fulfilled Promise
Promise.race([
  eatCake1,
  eatCake2,
  eatCake3
]).then((message) => {
  console.log(message);
})

const goConcert = (message) => {
  return new Promise((resolve, reject) => {
    if (message === 'okay') {
      resolve('Juhuuh, wir geh\'n ins Kino!');
    } else {
      reject('Buhuuh, kein Kinooo, will aber...!');
    }
  })
}

goConcert('nö').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

const displayTime = document.querySelector('#timer');

const time = setInterval(()=>{
  let t = new Date();
  let h = (`0${t.getHours()}`).slice(-2);
  let m = (`0${t.getMinutes()}`).slice(-2);
  let s = (`0${t.getSeconds()}`).slice(-2);
  displayTime.innerHTML = `${h}:${m}:${s}`;
}, 1000);

setTimeout(() => {
  clearInterval(time);
}, 10000);

