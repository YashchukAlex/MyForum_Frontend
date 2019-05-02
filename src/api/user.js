import axios from 'axios';

import { BASE_API } from '../constants/auth'

// GetUserInfo API request
export const getUserInfo = async () => {
  return await axios.get(`${BASE_API}/api/Account/UserInfo`)
  .then(response => response.data)
  .catch(error => {
    throw error.response;
  });
}

export const changePassword = async ({ currentPassword, newPassword, confirmPassword }) => {
  let params = {
    'OldPassword': currentPassword,
    'NewPassword': newPassword,
    'ConfirmPassword': confirmPassword
  }
  return await axios.post(`${BASE_API}/api/Account/ChangePassword`, params)
  .then(response => response.data)
  .catch(error => {
    throw error.response;
  });
}