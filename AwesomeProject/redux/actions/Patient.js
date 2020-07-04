import {
  ADD_PATIENT_REQUEST,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_ERROR,
  GET_PATEINT_REQUEST,
  GET_PATEINT_SUCCESS,
  GET_PATEINT_ERROR,
  DEL_PATEINT_REQUEST,
  DEL_PATEINT_SUCCESS,
  DEL_PATEINT_ERROR
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

export const deletePatientRequest = (doctorId) => {
  return {
    type: DEL_PATEINT_REQUEST,
    doctorId
  };
};

export const deletePatientSuccess = () => {
  return {
    type: DEL_PATEINT_SUCCESS,
  };
};


export const deletePatientError = () => {
  return {
    type: DEL_PATEINT_ERROR,
  };
};