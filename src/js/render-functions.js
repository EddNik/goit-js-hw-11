import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';

document.documentElement.style.setProperty(
  '$sl-overlay-background',
  'rgba(255, 0, 0, 0.5)'
);

export function createGallery(images) {
  const listImages = images
    .map(
      image => `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}" >
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>
      </li>`
    )
    .join('');

  return listImages;
}

// const light = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionsData: 'alt',
//   overlayOpacity: 0.95,
// });

// light.on('error.simplelightbox', function (e) {
//   alert('Could not find image. Try again.');
// });
