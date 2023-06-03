const $button = document.querySelector('.yellowButton');

const $container = document.querySelector('.container');

$button.addEventListener('click', function () {
  if ($button.className === 'darkButton') {
    $button.className = 'yellowButton';
    $container.className = 'container';
  } else {
    $button.className = 'darkButton';
    $container.className = 'containerDark';
  }
});
