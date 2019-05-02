import * as Const from '../constants/auth';

const initialState = {
  loading: false,
  loaded: false,
  data: {}
};

const auth = (state = initialState, { response, error, type }) => {
  switch (type) {
    case Const.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case Const.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: response
      };
    case Const.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    case Const.SIGNOUT_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case Const.SIGNOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case Const.SIGNOUT_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    default:
      return state;
  }
}

export default auth;