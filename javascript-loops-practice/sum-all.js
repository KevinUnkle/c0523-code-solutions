/* exported sumAll */
function sumAll(numbers) {
  let sum1 = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum1 += numbers[i];
  }
  console.log(sum1);
  return sum1;
}
