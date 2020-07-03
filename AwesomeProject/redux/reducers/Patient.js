import {
  ADD_PATIENT_REQUEST,ADD_PATIENT_SUCCESS,ADD_PATIENT_ERROR
  } from '../../config/Types';
  
  const INITIAL_STATE = {
    loading: false,
    patients: [],
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_PATIENT_REQUEST:
        console.log('ADD_PATIENT_REQUEST Reducer');
        return Object.assign({}, state, {loading: true});
  
      case ADD_PATIENT_SUCCESS:
        console.log('ADD_PATIENT_SUCCESS', action);
        return Object.assign({}, state, {
          loading: false,
        });
  
      case ADD_PATIENT_ERROR:
        console.log('ADD_PATIENT_ERROR Reducers');
        return Object.assign({}, state, {loading: false});
  
  
      default: {
        return state;
      }
    }
  };
  