import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/styles.css';

const iziToastOption = {
  timeout: 10000,
  theme: 'dark',
  messageColor: 'white',
  position: 'topRight',
  icon: 'custom-svg-icon',
  iconColor: '#FFFFFF',
  closeOnClick: true,
  backgroundColor: '#ef4040',
};

export default function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51407519-422ec1314326ee48566ae1dd4',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 21,
      },
    })
    .then(response => {
      if (
        Array.isArray(response.data.hits) &&
        response.data.hits.length === 0
      ) {
        iziToastOption.message =
          'Sorry, there are no images matching your search query. Please try again!';
        iziToast.show(iziToastOption);
      }
      return response.data.hits;
    })
    .catch(error => {
      console.log(error);
      return error.message;
    });
}
