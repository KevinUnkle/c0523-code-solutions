const $tabContainer = document.querySelector('.tab-container');

const $tabNodes = document.querySelectorAll('.tab');

const $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNodes.length; i++) {
      const tabNode = $tabNodes[i];
      if (tabNode === event.target) {
        event.target.className = 'tab active';
      } else {
        tabNode.className = 'tab';
      }
    }
  }

  if (event.target.matches('.tab')) {
    const $attribute = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewNodes.length; i++) {
      const viewNode = $viewNodes[i];
      const viewNodeAttribute = viewNode.getAttribute('data-view');
      if ($attribute === '.data-view') {
        viewNodeAttribute.className = '.data-view';
      } else {
        viewNodeAttribute.className = 'hidden';
      }
    }
  }
});
