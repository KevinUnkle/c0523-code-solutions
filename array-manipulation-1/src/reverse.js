/* exported reverse */
function reverse(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const reversed = array[i];
    newArray.push(reversed);
  }
  return newArray;
}
