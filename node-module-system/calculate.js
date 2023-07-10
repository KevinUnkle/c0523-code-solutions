import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

function calculate(arg1, operator, arg2) {
  switch (operator) {
    case 'plus':
      return add(arg1, arg2);
    case 'minus':
      return subtract(arg1, arg2);
    case 'times':
      return multiply(arg1, arg2);
    case 'over':
      return divide(arg1, arg2);
  }
  return undefined;
}

const arg1 = Number(process.argv[2]);
const operator = process.argv[3];
const arg2 = Number(process.argv[4]);

if (isNaN(arg1)) {
  console.log('invalid argument:', process.argv[2]);
} else if (isNaN(arg2)) {
  console.log('invalid argument:', process.argv[4]);
} else {
  const result = calculate(arg1, operator, arg2);
  if (result === undefined) {
    console.log('unknown operator:', operator);
  } else {
    console.log(`${arg1} ${operator} ${arg2} = ${result}`);
  }
}
