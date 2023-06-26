'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Erik Berndt',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-06-08T14:11:59.604Z',
    '2023-06-20T17:01:17.194Z',
    '2023-06-24T23:36:17.929Z',
    '2023-06-25T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'de-DE', // de-DE
};

const account2 = {
  owner: 'Hansi Pampel',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-24T18:49:59.371Z',
    '2023-06-25T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//info format date
const formatMovementDate = (date, locale) => {
  const now = new Date();
  const diff = Math.round((now - date) / 1000 / 60 / 60 / 24);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff <= 7) return `${diff} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
}

//info format amount
const formatAmount = (acc, amount) => {
  return new Intl.NumberFormat(acc.locale, {style: 'currency', currency: acc.currency}).format(amount);
}
//info insert html rows with movements
const displayMovements = (acc, sort = false) => {
  containerMovements.innerHTML = '';
  const movs = sort ? acc.movements.slice().sort((a,b) => a - b) : acc.movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[sort ? movs.length -1 - i: i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatAmount(acc, mov);

    const html = `
     <div class="movements__row">
       <div class="movements__type movements__type--${type}">${i +1} ${type}</div>
       <div class="balance__date">${displayDate}</div>
       <div class="movements__value">${formattedMov}</div>
     </div>
`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedBalance = formatAmount(acc, acc.balance)
  labelBalance.textContent = `${formattedBalance}`;
}


const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov,0);

  const formattedIncomes = formatAmount(acc, incomes)
  labelSumIn.textContent = `${formattedIncomes}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov,0);
  const formattedOut = formatAmount(acc,Math.abs(out));
  labelSumOut.textContent = `${formattedOut}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  const formattedInterest = formatAmount(acc, interest)
  labelSumInterest.textContent = `${formattedInterest}`;
}

const createUsername = function(accs) {
  //info wenn man mit einer forEach Objekte verändert 
  // ist das ein Side-Effect
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase().split(' ')
      .map(name => name[0]).join('');
  })
}
createUsername(accounts);

const updateUI = acc => {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

const startLogoutTimer = function() {
  //info set timer to 5 minutes
  let time = 300;
  const tick = function() {
    const min = Math.floor(time / 60);
    const sec = time % 60;

    //info in each call, print the remaining time to UI
    labelTimer.textContent = `${min}`.padStart(2, '0') + ':' + `${sec}`.padStart(2, '0');

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Login to get started';
      containerApp.style.opacity = '0';
    }
    time--;
  }
  //info call the timer every second
  tick();
  const timer = setInterval(tick, 1000)
  return timer;
}

//info userLogin
let currentAccount, timer;

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  //info optional chaining ?. anstelle von currentAccount && ...
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = '1';
    inputLoginPin.value = inputLoginUsername.value = '';

    //info remove focus from input field
    inputLoginPin.blur();
    updateUI(currentAccount);
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogoutTimer();

    //info start clock
    const displayTime = () => {

      const tick = () => {
        const options = {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        }
        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(new Date());
      }
      tick();
      setInterval(tick, 1000);
    }
    displayTime();
  }
})

//info transfer functionality
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferTo.value = inputTransferAmount.value = '';
  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username){
    //info
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    clearInterval(timer);
    timer = startLogoutTimer();
  }
})

//info loan request functionality
btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  if (amount > 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    clearInterval(timer);
    timer = startLogoutTimer();
  }
})

//info close account functionality
btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  const closeOutUser = inputCloseUsername.value;
  const closeOutPin = Number(inputClosePin.value);
  inputCloseUsername.value = inputClosePin.value = '';
  if (closeOutUser &&
      closeOutPin &&
      currentAccount.username === closeOutUser &&
      currentAccount.pin === closeOutPin
  ) {
    const idx = accounts.findIndex(idx => currentAccount === idx);
    accounts.splice(idx);
    containerApp.style.opacity = '0';
  }
})

//info sort button functionality
let sortState = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  sortState = !sortState;
  displayMovements(currentAccount, sortState);
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

labelBalance.addEventListener('click', () => {
  // const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
  // console.log(movementsUI.map(el => Number(el.innerText.slice(0, -1))));
  /*wiki
     document.querySelectorAll()
     returns a nodelist which can be converted to an array.
     therefore it can be built with the Array.from() method.
     Getting the array from the nodelist can also be achieved
     by using the spread operator
     [...document.querySelectorAll('.movements__values']
     in that case, the map method can only be called separately
   */
  //alt use Array.from() callback function to map
  console.log(Array.from(document.querySelectorAll('.movements__value'),
      el => Number(el.innerText.slice(0, -1))));
})