import API from './api';

export function signinUser({user}) {

    API.post('account/register',{user})
      .then(() => {
        alert("The registration was succesful");

      });
  }

  