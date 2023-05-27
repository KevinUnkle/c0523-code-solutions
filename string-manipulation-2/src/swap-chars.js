/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const $firstChar = string[secondIndex];
  const $secondChar = string[firstIndex];
  const $newArray = string.split('');
  $newArray[firstIndex] = $firstChar;
  $newArray[secondIndex] = $secondChar;
  return $newArray.join('');
}
