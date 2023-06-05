const $newh1 = document.querySelector('h1');

function newMessage() {
  $newh1.textContent = 'Hello There';
}

setTimeout(newMessage, 2000);
