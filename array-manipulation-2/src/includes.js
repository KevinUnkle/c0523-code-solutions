/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    const $arrayIndex = array[i];
    if (value === $arrayIndex) {
      return true;
    }
  }
  return false;
}
