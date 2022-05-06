import API from './api';

export function getCategories() {

     API.get('/category/')
    .then(result => { console.log(result.data.result); return result.data.result })
    .catch(error => { console.error(error); return Promise.reject(error); });

  }