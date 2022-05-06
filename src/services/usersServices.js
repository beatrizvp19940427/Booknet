import API from './api';

export async function signinUser({user}) {

  await API.get('/account/register',{
    params: {
      user: user
    }}); 
  }

  export async function loginUser({user}) {

    await API.get('/account/login',{
      params: {
        user: user
      }}); 
    }

  