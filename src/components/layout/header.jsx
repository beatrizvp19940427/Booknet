import {Link} from "react-router-dom";
import React  from 'react';

function Header(props) {
    return (
      <div className="inline-flex justify-start w-screen h-24 items-center px-12 bg-gradient-to-b from-green-400">
        <div className="w-1/4">
        <Link to="/"className="font-dancing-script text-4xl">Book Library</Link>
        </div>
      
        <nav className="inline-flex justify-between w-2/4">
                <Link to="/categories">Categories</Link>
                <Link to="/">My Books</Link>
                <Link to="/account">My Account</Link>
                <Link to="/settings">Settings</Link>
        </nav>

        <div className="w-1/4 inline-flex justify-end">
        <p>User section</p>
        </div>
      </div>
    );
  }

  export default Header;