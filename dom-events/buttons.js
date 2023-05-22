function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $clickButton = document.querySelector('.click-button');
console.log($clickButton);

$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $hoverButton = document.querySelector('.hover-button');
console.log($hoverButton);
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $doubleClickButton = document.querySelector('.double-click-button');
console.log($doubleClickButton);
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
