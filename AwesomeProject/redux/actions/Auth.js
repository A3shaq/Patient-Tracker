import {
  SIGNUP_REQUSET,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_USER_DATA_REQUEST,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_USER_TOKEN,
  REMOVE_USER_TOKEN,
  REMOVE_USER_TOKEN_SUCCESS
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

export const loginRequest = (email, password) => {
  console.log(' action from action loginRequest', email);
  return {
    type: LOGIN_REQUEST,
    email,
    password,
  };
};

export const loginSuccess = (uid) => {
  return {
    type: LOGIN_SUCCESS,
    uid,
  };
};

export const loginError = () => {
  return {
    type: LOGIN_ERROR,
  };
};

export const setUserToken = (userToken) => {
  return {
    type: SET_USER_TOKEN,
    userToken,
  };
};

export const logoutUserRequest = () => {
  return {
    type: REMOVE_USER_TOKEN,
  };
};

export const logoutUserSuccess = () => {
  return {
    type: REMOVE_USER_TOKEN_SUCCESS,
  };
};
