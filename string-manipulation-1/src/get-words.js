/* exported getWords */
function getWords(string) {
  const newarray = string.split(' ');
  if (string === '') {
    return [];
  }
  return newarray;
}
