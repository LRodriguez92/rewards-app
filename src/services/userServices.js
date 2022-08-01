import axios from 'axios'

export const login = ({email, password}) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/local`, {
    identifier: email,
    password: password,
  })
  .then((response) => {
    console.log('Logged in!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);

    localStorage.setItem('jwt', response.data.jwt);
    localStorage.setItem('username', response.data.user.username);
    localStorage.setItem('email', response.data.user.email);
  })
  .catch((error) => {
    console.log('An error occurred:', error.response);
  });
}

export const signup = ({email, password, username}) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/local/register`, {
    username: username,
    email: email,
    password: password,
  })
  .then((response) => {
    console.log('Signed up!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);

    localStorage.setItem('jwt', response.data.jwt);
    localStorage.setItem('username', response.data.user.username);
    localStorage.setItem('email', response.data.user.email);
  })
  .catch((error) => {
    console.log('An error occurred:', error.response);
  });
}