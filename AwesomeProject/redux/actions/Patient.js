import {
  ADD_PATIENT_REQUEST,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_ERROR,
  GET_PATEINT_REQUEST,
  GET_PATEINT_SUCCESS,
  GET_PATEINT_ERROR,
} from '../../config/Types';

export const addPatientRequest = (body) => {
  return {
    type: ADD_PATIENT_REQUEST,
    body,
  };
};

export const addPatientSuccess = () => {
  return {
    type: ADD_PATIENT_SUCCESS,
  };
};

export const addPatientError = () => {
  return {
    type: ADD_PATIENT_ERROR,
  };
};

export const getPatientRequest = () => {
  return {
    type: GET_PATEINT_REQUEST,
  };
};

export const getPatientSuccess = (response) => {
  console.log("get success action",response)
  return {
    type: GET_PATEINT_SUCCESS,
    response,
  };
};

export const getPatientError = () => {
  return {
    type: GET_PATEINT_ERROR,
  };
};
