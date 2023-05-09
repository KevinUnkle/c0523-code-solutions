function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('5 minutes converted to seconds is:', convertMinutesToSeconds(5));

function greet(name) {
  return '"Hey, ' + name + '"';
}
console.log(greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('The total area is:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log(
  'The first name is:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}
console.log(
  'The last element is:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
