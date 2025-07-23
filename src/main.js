import getImagesByQuery from './js/pixabay-api';

import { createGallery } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
form.addEventListener('submit', event => {
  event.preventDefault();

  const query = form.elements['search-text']?.value || '';
  //second method with underscore   query = form.elements.search_text.value;

  getImagesByQuery(query)
    .then(response => {
      if (response == 'Network Error') {
        return;
      }
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('afterbegin', createGallery(response));
    })
    .catch(error => {
      console.log(
        `Another possible errors except network,
            ${error}`
      );
    });
  console.log(gallery);
});
