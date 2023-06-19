const $newh1 = document.querySelector('h1');
let counter = 3;
const interval = setInterval(countdown, 1000);
function countdown() {
  $newh1.textContent = counter;
  counter--;
  if (counter <= -1) {
    $newh1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}
