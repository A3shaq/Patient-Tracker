import {put, takeLatest, take, call, fork, takeEvery} from 'redux-saga/effects';
import {
  ADD_PATIENT_REQUEST,
  GET_PATEINT_REQUEST,
  DEL_PATEINT_REQUEST,
} from '../config/Types';
import {firebase} from '../config/firebase';
import {
  addPatientSuccess,
  addPatientError,
  getPatientSuccess,
  getPatientError,
  getPatientRequest,
  deletePatientError,
  deletePatientSuccess,
} from '../redux/actions/Patient';
import moment from 'moment';
import {eventChannel} from 'redux-saga';
//add patient
const addPatientApi = (body) => {
  let curentTime = moment().format('YYYY-MM-DD HH:mm:ss');
  let doctorId;
  //firebase.auth().currentUser.uid;
  return firebase
    .database()
    .ref('/patients')
    .push({...body, doctorId: 'hygrygtyuguhr', curentTime});

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

// get patient

//event channel function for retriving a real-time data from firebase db
const createEventChannel = () => {
  const listener = eventChannel((emit) => {
    firebase
      .database()
      .ref('/patients')
      .on('value', (allPateints) => {
        // console.log('data val', Object.keys(allPateints.val()));
        allPateints = allPateints.val();
        let result = [];
        for (let patient in allPateints) {
          console.log('/patients ==>', patient);
          result = [{...allPateints[patient], patientId: patient}, ...result];
        }
        emit(result);
      });
    return () => database.ref('/patients').off(listener);
  });

  return listener;
};

function* getPatinetSaga() {
  console.log('patient saga =========>');
  let res;
  try {
    const updateChannel = createEventChannel();
    while (true) {
      const response = yield take(updateChannel);
      console.log('SUccess get', response);
      yield put(getPatientSuccess(response));
    }
  } catch (e) {
    //   alert("get erro")
    console.log('firebase ka apna error bta0', e);
    yield put(getPatientError());
  }
}
// get patient

// del patient
const deleteAPI = (patientId) => {
  return firebase.database().ref(`/patients/${patientId}`).remove();
};

function* deletePateintSaga(action) {
  
  let res;
  try {
    res = yield call(deleteAPI, action.doctorId);
    console.log('delete response success', res);
    yield put(deletePatientSuccess());
  } catch (e) {
    console.log('delete error', e);
    yield put(deletePatientError());
  }
}
// del patient
export function* watchPatientSagas() {
  yield takeLatest(ADD_PATIENT_REQUEST, addPatinetSaga);
  yield takeLatest(GET_PATEINT_REQUEST, getPatinetSaga);
  yield takeLatest(DEL_PATEINT_REQUEST, deletePateintSaga);
}
