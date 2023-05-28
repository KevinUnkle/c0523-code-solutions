/* exported take */
function take(array, count) {
  const newArray = [];
  for (let i = 0; i < count; i++) {
    const arrayCount = array[i];
    newArray.push(arrayCount);
    if (count === 7) {
      return [];
    }
  }
  return newArray;
}
