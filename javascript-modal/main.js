// need modal div element to display:show when button is clicked
// background color: dark when Modal appears
// When second 'NO' button is clicked,need div to hide
// DOM query
// addEventListener() click
// display: hide modal div element once clicked
// background color: switched back to white

const $blueButton = document.querySelector('.blueButton');
console.log($blueButton);

const $noButton = document.querySelector('.noButton');
console.log($noButton);

const $modal = document.querySelector('.hidden');
console.log($modal);

const $container = document.querySelector('.container');
console.log($container);

$blueButton.addEventListener('click', function () {
  if ($modal.className === 'hidden') {
    $modal.className = 'modal';
    $container.className = 'background';
  }
});

$noButton.addEventListener('click', function () {
  if ($modal.className === 'modal') {
    $modal.className = 'hidden';
    $container.className = 'container';
  }
});
