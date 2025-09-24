import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const { ['search-text']: searchInput } = event.target.elements;
  const searchInputValue = searchInput.value.trim();

  if (!searchInputValue.length) {
    return;
  }

  showLoader();

  getImagesByQuery(searchInputValue)
    .then(data => {
      if (!data.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createGallery(data);
    })
    .catch(error => {
      clearGallery();
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
}
