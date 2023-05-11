/* exported countdown */
function countdown(number) {
  const array1 = [];
  for (let i = number; i >= 0; i--) {
    console.log(number[i]);
    array1.push(i);
  }
  return array1;
}
