let totalClicks = 0;
const $hotButton = document.querySelector('.hot-button');

const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  totalClicks++;
  $clickCount.textContent = 'Clicks:' + totalClicks;

  if (totalClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (totalClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (totalClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (totalClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (totalClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
