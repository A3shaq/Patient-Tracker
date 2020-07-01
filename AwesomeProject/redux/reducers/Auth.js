import {SIGNUP_REQUSET, SIGNUP_SUCCESS, SIGNUP_ERROR} from '../../config/Types';

const INITIAL_STATE = {
  loading: false,
  users: [],
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
      console.log('GET_USERS_SETTINGS_ERROR');
      return Object.assign({}, state, {loading: false});

    default: {
      return state;
    }
  }
};
