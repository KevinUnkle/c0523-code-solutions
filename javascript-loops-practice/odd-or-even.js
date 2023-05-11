/* exported oddOrEven */
function oddOrEven(numbers) {
  const array1 = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      array1.push('even');
    } else {
      array1.push('odd');
    }
  }
  return array1;
}
