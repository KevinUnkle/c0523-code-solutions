// eslint-disable-next-line no-unused-expressions
[
  {
    isbn: '123456789',
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  },
  {
    isbn: '987654321',
    name: 'To Kill A Mockingbird',
    author: 'Harper Lee',
  },
  { isbn: '135792468', name: 'The Grapes of Wrath', author: 'John Steinbeck' },
];
console.log([
  'Book 1:',
  {
    isbn: '123456789',
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  },
  'Book 2:',
  { isbn: '987654321', name: 'To Kill A Mockingbird', author: 'Harper Lee' },
  'Book 3:',
  { isbn: '135792468', name: 'The Grapes of Wrath', author: 'John Steinbeck' },
]);
console.log(
  'Type of:',
  typeof [
    {
      isbn: '123456789',
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
    },
    { isbn: '987654321', name: 'To Kill A Mockingbird', author: 'Harper Lee' },
    {
      isbn: '135792468',
      name: 'The Grapes of Wrath',
      author: 'John Steinbeck',
    },
  ]
);
console.log(
  JSON.stringify([
    'Book 1:',
    {
      isbn: '123456789',
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
    },
    'Book 2:',
    { isbn: '987654321', name: 'To Kill A Mockingbird', author: 'Harper Lee' },
    'Book 3:',
    {
      isbn: '135792468',
      name: 'The Grapes of Wrath',
      author: 'John Steinbeck',
    },
  ])
);
console.log(
  'Type of:',
  typeof JSON.stringify([
    'Book 1:',
    {
      isbn: '123456789',
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
    },
    'Book 2:',
    { isbn: '987654321', name: 'To Kill A Mockingbird', author: 'Harper Lee' },
    'Book 3:',
    {
      isbn: '135792468',
      name: 'The Grapes of Wrath',
      author: 'John Steinbeck',
    },
  ])
);

// eslint-disable-next-line no-unused-expressions

const json = '{"Number ID": 12345, "String name": "String"}';
console.log('Type of:', typeof JSON.stringify(json));

console.log(JSON.parse(json));
console.log(typeof JSON.parse(json));
