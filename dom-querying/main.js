console.log('hello, world');
const h1 = document.querySelector('h1');
console.log(h1);
console.dir(h1);

const explanation = document.querySelector('#explanation');
console.log('$explanation', explanation);
console.dir(explanation);

const hint = document.querySelector('.hint');
console.log('$hint', hint);
console.dir(hint);

const nodeList = document.querySelectorAll('p');
console.log('$paragraphs', nodeList);

const exampleLink = document.querySelectorAll('.example-link');
console.log('$links', exampleLink);
