import * as Const from '../constants/user';

const initialState = {
  loading: false,
  loaded: false,
  data: {}
};

const user = (state = initialState, { response, error, type }) => {
  switch(type){
    case Const.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case Const.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: response
      };
    case Const.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
      case Const.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loadingUpdatePassword: true,
        loadedUpdatePassword: false
      };
    case Const.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loadingUpdatePassword: false,
        loadedUpdatePassword: true,
        response
      };
    case Const.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loadingUpdatePassword: true,
        loadedUpdatePassword: false,
        error
      };
    default:
      return state;
  }
}

export default user;