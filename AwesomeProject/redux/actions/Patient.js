import {
  ADD_PATIENT_REQUEST,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_ERROR,
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


