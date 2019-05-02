import axios from 'axios';

import { BASE_API } from '../constants/auth'

// SignUp API request
export const signUp = ({ login, email, password, confirmPassword }) => {
  let params = {
    'Login': login,
    'Email': email,
    'Password': password,
    'ConfirmPassword': confirmPassword
  }
  return axios.post(`${ BASE_API }/api/Account/Register`, params)
    .then(response => response.data)
    .catch(error => {
      throw error.response;
    });
}

// SignIn API request
export const signIn = async ({ grant_type, username, password }) => {
  let params = {
    'grant_type': grant_type,
    'username': username,
    'password': password
  };
  
  var formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return await axios.post(`${BASE_API}/Token`, formBody)
    .then(response => response.data)
    .catch(error => {
      throw error.response;
    });
}