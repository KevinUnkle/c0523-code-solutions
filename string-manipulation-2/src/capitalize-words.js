/* exported capitalizeWords */
function capitalizeWords(string) {
  const $string = string.split(' ');
  const array = [];

  for (let i = 0; i < $string.length; i++) {
    const firstCharacter = $string[i][0].toUpperCase();
    const secondHalf = $string[i].substring(1);
    const lowerCase = secondHalf.toLowerCase();
    const final = firstCharacter + lowerCase;
    array.push(final);
  }
  return array.join(' ');
}
