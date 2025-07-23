import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.js-loader');

export function createGallery(images) {
  const listImages = images
    .map(
      image => `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
          </a>
          <div class="gallery-options-container">
          <div class="gallery-options">
            <h3 class="count-option">Likes</h3>
            <p>${image.likes}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Views</h3>
            <p>${image.views}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Comments</h3>
            <p>${image.comments}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${image.downloads}</p>
          </div>
         </div>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', listImages);

  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    overlayOpacity: 0.95,
  }).refresh();
}

export function showLoader() {
  loader.classList.add('loader');
}

export function hideLoader() {
  loader.classList.remove('loader');
}

export function clearGallery() {
  gallery.innerHTML = '';
}
