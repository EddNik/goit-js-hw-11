import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/styles.css';
// import '../img/bi_x-octagon.svg';

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
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51407519-422ec1314326ee48566ae1dd4',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        // category: 'animals',
        // min_width: minWidth,
        // min_height: minHeight,
      },
    })
    .then(response => {
      //   if (response.statusText !== 'OK') {
      //     throw new Error(response.status);
      //   }
      //   console.log(response.status);
      //   console.log(response.statusText);
      //   console.log(response.headers);
      //   console.log(response.config);
      //   console.log(response.request);
      if (
        Array.isArray(response.data.hits) &&
        response.data.hits.length === 0
      ) {
        iziToastOption.message =
          'Sorry, there are no images matching your search query. Please try again!';
        iziToast.show(iziToastOption);
      }
      console.log(response.data);
      //   return response.data;
    })
    .catch(error => {
      console.error('Request failed:', error);
    });
}

// getImagesByQuery('morning');
