/* exported dropRight */
function dropRight(array, count) {
  const $array = array;
  const $slice = $array.slice(0, array.length - count);
  if (count > array.length) {
    return [];
  }

  return $slice;
}
