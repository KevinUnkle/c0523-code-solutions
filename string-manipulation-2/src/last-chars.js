/* exported lastChars */
function lastChars(length, string) {
  if (string.length < length) {
    return string;
  }
  const $sliced = string.slice(string.length - length, string.length);
  return $sliced;
}
