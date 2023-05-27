/* exported capitalizeWord */
function capitalizeWord(word) {
  const word1 = word.toLowerCase();
  if (word1 === 'javascript') {
    return 'JavaScript';
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
