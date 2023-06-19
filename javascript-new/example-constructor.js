function ExampleConstructor() {}
console.log('ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);

const newExampleConstructor = new ExampleConstructor();
console.log(newExampleConstructor);

const instanceOfExampleConstructor =
  newExampleConstructor instanceof ExampleConstructor;
console.log(instanceOfExampleConstructor);
