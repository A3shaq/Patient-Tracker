import {
  SIGNUP_REQUSET,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_USER_DATA_REQUEST,
} from '../../config/Types';

export const signUpRequest = (name, email, password) => {
  console.log(' action from action signUpRequest', name);
  return {
    type: SIGNUP_REQUSET,
    name,
    email,
    password,

  };
};

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signUpError = () => {
  return {
    type: SIGNUP_ERROR,
  };
};

export const setUser = (userObj) => {
  console.log(' action from action setUser', userObj);
  return {
    type: SET_USER_DATA_REQUEST,
    userObj,

  };
};
