/* exported takeRight */
function takeRight(array, count) {
  const $array = array;
  const $slice = $array.slice(array.length - count);
  if (count > array.length) {
    return array;
  }
  return $slice;
}
