import Axios from 'axios';

import { BASE_API } from '../constants/auth'

// SignUp API request
export const signUp = (data) => {
  return Axios.post(`${BASE_API}`, {data})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// SignIn API request
export const signIn = ({grant_type, username, password}) => {
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

  return Axios.post(`${BASE_API}/Token`, formBody)
    .then(response => response.data)
    .catch(error => {
      throw error.response;
    });
}