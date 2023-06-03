/* exported ransomCase */
function ransomCase(string) {
  let unknown = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      unknown += string[i].toLowerCase();
    } else {
      unknown += string[i].toUpperCase();
    }
  }
  return unknown;
}

// let i = 0 means it starts at index 0, i < string.length is how long the loop will run for, i++ is the increment by 1 each time it loops.
// 0 is odd in index values
// 1 is even in index values
// line 5 divides by 2 to check for remainder to see if the value is odd or even
