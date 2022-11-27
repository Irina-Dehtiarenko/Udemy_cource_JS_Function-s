// FUNCTIONS RETURNING FUNCTION

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey'); //
// greeterHey('Jonas');
// greeterHey('Marta');

// greet('Hello')('Jonas');

// /This Keyword

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Iryna Dehtiarenko');
// lufthansa.book(365, 'John Smith');

// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   booking: [],
// };

// const book = lufthansa.book;

// // Does not work:
// // book(23, 'Sarah Wilians');

// //funkcja ma swoje metody:
// // CALL METHOD
// // .call()

// book.call(eurowings, 23, 'Sara Wiliams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Maria Kurey');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   booking: [],
// };

// book.call(swiss, 158, 'Mare Boley');
// // console.log(swiss);

// //  APPLY METHODS(old method)

// const flightData = [586, 'George Cooper'];
// book.apply(swiss, flightData);

// console.log(swiss);

// // better solution:

// book.call(swiss, ...flightData);

// // BIND METHOD

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Kool');

// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Lucas Pert');

// // WITH EVENT LISTENERS

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane() // wywoła funkcje

// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); //nie zadziała, ponieważ this będzie wskazywał na DOM element from evenListener

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //ręcznie dodajemy  this

// Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // const addVAT = value => value + value * 0.23;

// console.log(addVAT(100));

// Challenge function returns another function

const addTaxRate = rate => value => value + value * rate;

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
