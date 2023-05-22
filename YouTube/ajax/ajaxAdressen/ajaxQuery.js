const addressesContainer = document.querySelector('[data-addresses]');
const addressTemplate = document.querySelector('[data-address-template]');
const btn = document.querySelector('#btn1');

const getNewAddresses = () => {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'getRandomData.php', true);
    xhr.onload = function () {
      if (this.status === 200) {
        const resData = JSON.parse(this.responseText);
        console.log(resData);
        const addresses = resData.map(address => {
          const card = addressTemplate.content.cloneNode(true).children[0];
          const street = card.querySelector('[data-street]');
          const district = card.querySelector('[data-district]');
          street.innerHTML = address.strasse;
          district.innerHTML = address.ort;
          addressesContainer.append(card);
          return {street: address.strasse, district: address.ort}
        })
      }
    }
    xhr.send();
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener('click', () => {
  addressesContainer.innerHTML = '';
  getNewAddresses();
});