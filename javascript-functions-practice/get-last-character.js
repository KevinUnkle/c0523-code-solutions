/* exported getLastCharacter */
function getLastCharacter(string) {
  const lastCharacter = string.length - 1;
  const lastLastCharacter = string[lastCharacter];
  return lastLastCharacter;
}
