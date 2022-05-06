import React  from 'react';
import Category from '../components/books/category';


function Categories({allCategories}) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-sans text-4xl font-bold text-gray-900 pt-12">Categories</h2>
        <ul className="flex container justify-between py-8">
      {allCategories && allCategories.map(item => (
        <Category item={item} />
      ))}
    </ul>
      </div>
    );
  }

  export default Categories;