const $button = document.querySelector('.yellowButton');
console.log($button);

const $container = document.querySelector('.container');
console.log($container);

$button.addEventListener('click', function () {
  if ($button.className === 'darkButton') {
    $button.className = 'yellowButton';
    $container.className = 'container';
  } else {
    $button.className = 'darkButton';
    $container.className = 'containerDark';
  }
});
