import API from './api';

export async function getCategories() {

     return await API.get('/category');

  }

  export async function getCategory(ID) {

    await API.get('/category/get-category',{
      params: {
        catID: ID
      }}); 

 }