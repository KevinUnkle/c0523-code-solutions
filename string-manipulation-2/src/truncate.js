/* exported truncate */
function truncate(length, string) {
  if (string.length < string) {
    return length;
  }
  return string.slice(0, length) + '...';
}
