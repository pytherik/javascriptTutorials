class Bike {
  constructor(gears) {
    this.gears = gears;
  }
  getBike = () => console.log(this);
}

// const myBike = new Bike(21);
// console.log(myBike.gears)
// myBike.getBike();

const func1 = function(e) {
  console.log(e)
  console.log(e.target.id)
  console.log("func1: ", this);
}

const arrFunc = (e) => {
  console.log("arrFunc: ", this)
}

const func2 = function (e) {
  console.log("func2: ", this)
}

const mul = (n1, n2) => n1 * n2;
//chaining bei einem Objekt

class Motorbike  {
  constructor(speed) {
    this.speed = speed;
  }
  accellerate(kmh) {
    this.speed += kmh;
    return this;
  }
  decelerate(kmh) {
    this.speed -= kmh;
    return this;
  }
}

const simson = new Motorbike(20);
console.log(simson.accellerate(10).accellerate(20).decelerate(20).speed);

console.log(mul(30, 2342));
document.getElementById('btn1').addEventListener('click', func1.bind('280'));
document.getElementById('btn2').addEventListener('click', arrFunc);
document.getElementById('btn3').addEventListener('click', func2);

// document.getElementById('btn1').addEventListener('click', function(e) {
//   func1();
//   arrFunc();
//   console.log(this);
// });
// document.getElementById('btn2').addEventListener('click', (e) => {
//   func1();
//   arrFunc();
//   console.log(this);
// });


[0, 2, 100].map(temp => console.log(temp <= 0 ? `${temp}°: Eis`
  : temp < 100 ? `${temp}°: Wasser`
    : `${temp}°: Dampf`));
