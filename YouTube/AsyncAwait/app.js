const makeRequest = (location) => {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === 'Whisky Bar') {
      resolve('One more Beer, Yo!');
    } else {
      reject('They\'ve got no Beer, Boo!');
    }
  })
}

const processRequest = (response) => {
  return new Promise((resolve, reject) => {
    console.log('Processing response ...');
    resolve(`Extra Information + ${response}`);
  })
}

// makeRequest('Whisky Bar').then(response => {
//   console.log('Response received!');
//   return processRequest(response);
// }).then(processedResponse => {
//   console.log(processedResponse);
// }).catch(err => {
//   console.log(err);
// })

//info now async await

const doWork = async () => {
  try {
    const response = await makeRequest('Whisky Bar');
    console.log('Response received!');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch(err) {
    console.log(err);
  }
}

doWork();