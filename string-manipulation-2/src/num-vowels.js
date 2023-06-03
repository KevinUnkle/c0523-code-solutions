/* exported numVowels */
function numVowels(string) {
  let numberVowels = 0;
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (const key of string) {
    if (vowels.includes(key)) {
      numberVowels++;
    }
  }
  return numberVowels;
}
