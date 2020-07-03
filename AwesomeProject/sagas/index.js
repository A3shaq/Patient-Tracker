import {all} from 'redux-saga/effects';
import {watchAuthentication} from './Auth';
import {watchPatientSagas} from './Patient';

export default function* rootSaga() {
  yield all([watchAuthentication(), watchPatientSagas()]);
}
