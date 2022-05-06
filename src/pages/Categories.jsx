import React  from 'react';
import Category from '../components/books/category';


function Categories({allCategories}) {
    return (
      <div className="">
        <h2>Categories</h2>
        <ul>
      {allCategories.map(item => (
        <Category item={item} />
      ))}
    </ul>
      </div>
    );
  }

  export default Categories;