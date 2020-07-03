import {put, takeLatest, call} from 'redux-saga/effects';
import {ADD_PATIENT_REQUEST} from '../config/Types';
import {firebase} from '../config/firebase';
import {addPatientSuccess, addPatientError} from '../redux/actions/Patient';
import moment from 'moment';

//add patient
const addPatientApi = (body) => {
  let curentTime = moment().format('YYYY-MM-DD HH:mm:ss');
  let doctorId = firebase.auth().currentUser.uid;
  return firebase
    .database()
    .ref('/patients')
    .push({...body, doctorId, curentTime});

  // console.log('doctorId', doctorId);
};
function* addPatinetSaga(action) {
  console.log('addPatinetSaga', action);
  let res;
  try {
    res = yield call(addPatientApi, action.body);
    console.log('res patiend added', res);
    yield put(addPatientSuccess());
  } catch (e) {
    alert('patient add error');
    console.log('patient Add error');
    yield put(addPatientError());
  }
}
//add patient

export function* watchPatientSagas() {
  yield takeLatest(ADD_PATIENT_REQUEST, addPatinetSaga);
}
