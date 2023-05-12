/* exported countdown */
function countdown(number) {
  const array1 = [];
  for (let i = number; i >= 0; i--) {
    array1.push(i);
  }
  return array1;
}
