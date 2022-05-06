import React from 'react';
import {Link} from "react-router-dom";

function Management(props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="font-sans text-4xl font-bold text-gray-900 pt-12">Set Up Bookpad</h2>
            <div className="flex container justify-around py-8">
            <Link to='/settings/categories/' className="">
                <div className="flex flex-col items-start rounded shadow p-8">
                    <h2 className="font-sans text-2xl font-bold text-gray-900">Categories</h2>
                </div>
</Link>
<Link to='/settings/authors/' className="">
                <div className="flex flex-col items-start rounded shadow p-8">
                    <h2 className="font-sans text-2xl font-bold text-gray-900">Authors</h2>
                </div>
</Link>
            </div>
        </div>
    );
}

export default Management;