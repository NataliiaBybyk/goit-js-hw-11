import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '43147251-812f7b0e187b76efed42bbc3c';

export default function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios.get(`${API_URL}?${searchParams}`).then(result => {
    return result.data.hits;
  });
}
