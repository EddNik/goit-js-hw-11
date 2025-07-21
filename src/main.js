import getImagesByQuery from './js/pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  //   query = form.elements.search_text.value;
  const query = form.elements['search-text']?.value || '';
  getImagesByQuery(query);
});
