import Login from "../components/users/login";
import Signin from "../components/users/signin";
import React  from 'react';

function Account(props) {

    return (
      <div className="flex flex-col justify-start items-center">
        <h2 className="font-sans text-4xl font-bold text-gray-900 pt-12">My Account</h2>
        <div className="container flex">
            <Login />
            <Signin />
        </div>
      </div>
    );
  }

  export default Account;