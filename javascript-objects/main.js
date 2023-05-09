const student = {
  firstName: 'Kevin ',
  lastName: 'Unkle',
  age: 32,
};
const fullName = student.firstName + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Digital Marketing Manager';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Nissan',
  model: 'Altima',
  year: 2006,
};
vehicle['color'] = 'Black';
vehicle['isConvertible'] = 'False';
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Jax',
  type: 'Dog',
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
