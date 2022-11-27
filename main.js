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

// const addTaxRate = rate => value => value + value * rate;

// const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(100));

// CHALLENGE 1

/* 

Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?


Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]

*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answerNumber = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //My version

    // if (answerNumber <= 3 && answerNumber >= 0) {
    //   if (answerNumber === 0) {
    //     this.answers[0]++;
    //   } else if (answerNumber === 1) {
    //     this.answers[1]++;
    //   } else if (answerNumber === 2) {
    //     this.answers[2]++;
    //   } else if (answerNumber === 3) {
    //     this.answers[3]++;
    //   }
    //     } else {
    //       alert('Please write the correct number');
    //       this.registerNewAnswer();
    //     }
    //     console.log(this.answers);
    //     this.displayResults(this.answers);

    // Teacher's solution:

    typeof answerNumber === 'number' &&
      answerNumber < this.answers.length &&
      this.answers[answerNumber]++;

    //   my solution
    // this.displayResults(this.answers);

    // teacher's sol:
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 }, 'string');
poll.displayResults.call({ answers: data2 });
