/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const array1 = [];
  for (let i = 0; i < words.length; i++) {
    array1.push(words[i] + suffix);
  }
  return array1;
}
