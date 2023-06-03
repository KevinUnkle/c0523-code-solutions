/* exported drop */

function drop(array, count) {
  const $array = array;
  const $slice = $array.slice(count);
  return $slice;
}
