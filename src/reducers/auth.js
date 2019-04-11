import * as Const from '../constants/auth';

const initialState = {
  loading: false,
  loaded: false,
  error: {},
  token: {}
};

const auth = (state = initialState, { response, error, type }) => {
  console.log(`response = ${response}, error = ${error}`);
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
        token: response
      };
    case Const.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error
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
        error: error
      };
    default:
      return state;
  }
}

export default auth;