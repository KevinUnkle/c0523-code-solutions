/* exported sumAll */
function sumAll(numbers) {
  let sum1 = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum1 += numbers[i];
  }
  return sum1;
}
