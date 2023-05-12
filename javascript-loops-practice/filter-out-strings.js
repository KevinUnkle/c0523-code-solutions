/* exported filterOutStrings */
function filterOutStrings(values) {
  const array1 = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      array1.push(values[i]);
    }
  }
  return array1;
}
