import {
  SIGNUP_REQUSET,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../config/Types';

const INITIAL_STATE = {
  loading: false,
  userToken: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_REQUSET:
      console.log('SIGNUP_REQUSET Reducer');
      return Object.assign({}, state, {loading: true});

    case SIGNUP_SUCCESS:
      console.log('SIGNUP_SUCCESS', action);
      return Object.assign({}, state, {
        loading: false,
      });

    case SIGNUP_ERROR:
      return Object.assign({}, state, {loading: false});

    case LOGIN_REQUEST:
      console.log('LOGIN_REQUEST Reducer');
      return Object.assign({}, state, {loading: true});

    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS', action);
      return Object.assign({}, state, {
        loading: false,
        userToken: action.uid,
      });

    case LOGIN_ERROR:
      return Object.assign({}, state, {loading: false});

    default: {
      return state;
    }
  }
};
