const $userName = document.getElementById('user-name');
console.log($userName);

const $userEmail = document.getElementById('user-email');
console.log($userEmail);

const $userMessage = document.getElementById('user-message');
console.log($userMessage);

$userName.addEventListener('focus', function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
});

$userName.addEventListener('blur', function handleFocus(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
});

$userName.addEventListener('input', function handleFocus(event) {
  console.log('event.target.name:', event.target.name, event.target.value);
});

$userEmail.addEventListener('focus', function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
});

$userEmail.addEventListener('blur', function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
});

$userEmail.addEventListener('input', function handleBlur(event) {
  console.log('event.target.name:', event.target.name, event.target.value);
});

$userMessage.addEventListener('focus', function handleInput(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
});

$userMessage.addEventListener('blur', function handleInput(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
});

$userMessage.addEventListener('input', function handleInput(event) {
  console.log('event.target.name:', event.target.name, event.target.value);
});
