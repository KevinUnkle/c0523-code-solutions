const numberOne = 1;
const numberTwo = 2;
const numberThree = 3;
const maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('Max value of maximumValue is:', maximumValue);

const heroes = ['Moon Knight', 'Korg', 'Groot', 'Deadpool'];
let randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('The randomIndex number is:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('The randomHero is:', randomHero);

const library = [
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss',
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
  },
  {
    title: 'A Song of Ice and Fire',
    author: 'D.B. Weiss',
  },
];
const lastBook = library.pop();
console.log('The lastBook is:', lastBook);
const firstBook = library.shift();
console.log('The firstBook is:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(2);
console.log('library:', library);

const fullName = 'Kevin Unkle';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
