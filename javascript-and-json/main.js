const books = [
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
console.log(books);
console.log('Type of books:', typeof books);
const jsonBooks = JSON.stringify(books);
console.log(jsonBooks);
console.log(typeof jsonBooks);

const json = '{"Number ID": 12345, "String name": "String"}';
console.log(json);
console.log('type of:', typeof json);

const object = JSON.parse(json);
console.log(object);
console.log('type of:', typeof object);
