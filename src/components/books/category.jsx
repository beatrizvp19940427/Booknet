import React from 'react';
import {Link} from "react-router-dom";

function Category({ item }) {
    return (    
        <Link to={`/categories/${item.name}`} className="">
        <li className="flex flex-col items-center rounded shadow p-12" key={item.id}>

                <div className="p-4">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                </div>
                <div className="">
                    {item.description}
                </div>
 

        </li>
        </Link>
    );
}

export default Category;