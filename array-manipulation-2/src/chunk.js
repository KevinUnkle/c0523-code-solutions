/* exported chunk */
function chunk(array, size) {
  const emptyArray = [];
  const $array = array;

  for (let i = 0; i < array.length; i += size) {
    const $slice = $array.slice(i, i + size);
    emptyArray.push($slice);
    console.log($slice);
  }
  return emptyArray;
}
