import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();

  const query = form.elements['search-text']?.value || '';
  //second method with underscore   query = form.elements.search_text.value;
  showLoader();
  getImagesByQuery(query)
    .then(response => {
      if (response == 'Network Error') {
        return;
      }
      createGallery(response);
      hideLoader();
    })
    .catch(error => {
      console.log(
        `Another possible errors except network,
            ${error}`
      );
    });
});
