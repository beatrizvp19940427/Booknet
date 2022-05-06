import React from 'react';

function Category({ item }) {
    return (
        <li key={item.id}>
            <div className="">
                <div className="">
                    <h2>{item.name}</h2>
                </div>
                <div className="">
                    {item.description}
                </div>
            </div>

        </li>

    );
}

export default Category;