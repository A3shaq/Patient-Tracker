import {
  ADD_PATIENT_REQUEST,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_ERROR,
  GET_PATEINT_REQUEST,
  GET_PATEINT_SUCCESS,
  GET_PATEINT_ERROR,
  DEL_PATEINT_REQUEST,
  DEL_PATEINT_SUCCESS,
  DEL_PATEINT_ERROR,
  UPDATE_PATIENT_REQUEST,
  UPDATE_PATIENT_SUCCESS,
  UPDATE_PATIENT_ERROR,
} from '../../config/Types';

const INITIAL_STATE = {
  loading: false,
  patients: [],
  delLoading: false,
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

    case GET_PATEINT_REQUEST:
      console.log('GET_PATEINT_REQUEST reducer');
      return Object.assign({}, state, {loading: true});

    case GET_PATEINT_SUCCESS:
      console.log('GET_PATEINT_SUCCESS', action);
      return Object.assign({}, state, {
        patients: action.response,
        loading: false,
      });

    case GET_PATEINT_ERROR:
      console.log('GET_PATEINT_ERROR Reducers');
      return Object.assign({}, state, {loading: false});

    case DEL_PATEINT_REQUEST:
      console.log('DEL_PATEINT_REQUEST reducer');
      return Object.assign({}, state, {delLoading: true});

    case DEL_PATEINT_SUCCESS:
      console.log('DEL_PATEINT_SUCCESS reducer');
      return Object.assign({}, state, {delLoading: false});

    case DEL_PATEINT_ERROR:
      console.log('DEL_PATEINT_ERROR reducer');
      return Object.assign({}, state, {delLoading: false});

    case UPDATE_PATIENT_REQUEST:
      console.log('UPDATE_PATIENT_REQUEST Reducer');
      return Object.assign({}, state, {loading: true});

    case UPDATE_PATIENT_SUCCESS:
      console.log('UPDATE_PATIENT_SUCCESS', action);
      return Object.assign({}, state, {
        loading: false,
      });

    case UPDATE_PATIENT_ERROR:
      console.log('UPDATE_PATIENT_ERROR Reducers');
      return Object.assign({}, state, {loading: false});

    default: {
      return state;
    }
  }
};
