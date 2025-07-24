import getImagesByQuery from './js/pixabay-api';
import { iziToastOption } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  showLoader,
  clearGallery,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  const query = form.elements['search-text'].value.trim();
  showLoader();
  if (query === '') {
    iziToastOption.message =
      'Sorry, this name images is empty. Please try again!';
    iziToastOption.position = 'topRight';
    iziToast.show(iziToastOption);
    setTimeout(() => {
      hideLoader();
    }, 500);
  } else {
    getImagesByQuery(query)
      .then(response => {
        createGallery(response);
        hideLoader();
      })
      .catch(error => {
        iziToastOption.message = `${error}`;
        iziToastOption.timeout = 10000;
        iziToast.show(iziToastOption);
        setTimeout(() => {
          hideLoader();
        }, 500);
      });
  }
});
