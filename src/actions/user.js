import { GET_USER_REQUEST, CHANGE_PASSWORD_REQUEST } from '../constants/user';

export const getUserRequest = () => {
  return { 
    type: GET_USER_REQUEST
  };
}

export const changePassword = ({ currentPassword, newPassword, confirmPassword }) => {
  return { 
    type: CHANGE_PASSWORD_REQUEST
  };
}