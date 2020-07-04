import {put, takeLatest, take, call, fork, takeEvery} from 'redux-saga/effects';
import {ADD_PATIENT_REQUEST, GET_PATEINT_REQUEST} from '../config/Types';
import {firebase} from '../config/firebase';
import {
  addPatientSuccess,
  addPatientError,
  getPatientSuccess,
  getPatientError,
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
      .on("value", (allPateints) => {
        // console.log('data val', data);
        allPateints = allPateints.val();
        let result = [];
        for (let patient in allPateints) {
          console.log("/patients",allPateints[patient])
          result = [{...allPateints[patient]}, ...result];
        }
        emit(result);
      });
    return () => database.ref('/patients').off(listener);
  });

  return listener;
};

function* getPatinetSaga() {
  let res;
  try {
    
    const updateChannel = createEventChannel();
    // while(true) {
    const response = yield take(updateChannel);
    console.log('SUccess get', response);
    yield put(getPatientSuccess(response));
  } catch (e) {
    //   alert("get erro")
    console.log('firebase ka apna error bta0', e);
  }
}
// get patient
export function* watchPatientSagas() {
  yield takeLatest(ADD_PATIENT_REQUEST, addPatinetSaga);
  yield takeLatest(GET_PATEINT_REQUEST, getPatinetSaga);
}
