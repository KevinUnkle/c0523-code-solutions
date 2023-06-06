const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  console.log(event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
});
