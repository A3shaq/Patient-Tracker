import {combineReducers} from 'redux';
import AuthReducer from './reducers/Auth';
import PatientReducer from './reducers/Patient';

export default combineReducers({
  AuthReducer: AuthReducer,
  PatientReducer,
});
