import {put, takeLatest, take, call, race} from 'redux-saga/effects';
import {
  ADD_PATIENT_REQUEST,
  GET_PATEINT_REQUEST,
  DEL_PATEINT_REQUEST,
  UPDATE_PATIENT_REQUEST,
  STOP_PATIENT_SAGA,
} from '../config/Types';
import {firebase} from '../config/firebase';
import {ToastAndroid} from 'react-native'
import {isLogedIn} from '../config/constant';
import {
  addPatientSuccess,
  addPatientError,
  getPatientSuccess,
  getPatientError,
  // getPatientRequest,
  deletePatientError,
  deletePatientSuccess,
  updatePatientSuccess,
  updatePatientError,
} from '../redux/actions/Patient';
import moment from 'moment';
import {eventChannel} from 'redux-saga';

//add patient
const addPatientApi = (body) => {
  let curentTime = moment().format('YYYY-MM-DD HH:mm:ss');
  // let doctorId = await isLogedIn();
  let doctorId = firebase.auth().currentUser.uid;
  console.log('docterID response', doctorId);
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
    ToastAndroid.showWithGravityAndOffset(
      "Patient Added",
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50
    );
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
        let userId = firebase.auth().currentUser.uid;
        allPateints = allPateints.val();
        let result = [];
        for (let patient in allPateints) {
          if (allPateints[patient].doctorId === userId) {
            // console.log('/patients ==>', patient);
            result = [{...allPateints[patient], patientId: patient}, ...result];
          }
        }
        emit(result);
      });
    return () => firebase.database().ref('/patients').off('value');
  });

  return listener;
};

function* getPatinetSaga() {
  console.log('patient saga =========>');
  let res;
  let updateChannel;
  try {
    updateChannel = createEventChannel();
    let cancelled = false;

    while (!cancelled) {
      try {
        const {task, cancel} = yield race({
          cancel: take(STOP_PATIENT_SAGA),
          task: take(updateChannel),
        });

        console.log('ghy==>', cancel, task);
        if (cancel) {
          console.log('cancel===>', cancel);
          updateChannel.close();
          cancelled = true;
        } else {
          console.log('task==>');
          console.log('SUccess get====>');

          yield put(getPatientSuccess(task));
        }
      } catch (e) {
        // alert("kk")
        console.log('===> catch errpr');
      }

      // const response = yield take(updateChannel);
    }
  } catch (e) {
    //   alert("get erro")
    console.log('firebase ka apna error bta0', e);
    yield put(getPatientError());
  } finally {
    if (updateChannel) {
      updateChannel.close();
    }
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

// update patient
function UpdatePatientApi(body) {
  let {patientId, ...newBody} = body;
  console.log('update API', newBody);
  return firebase.database().ref(`/patients/${body.patientId}`).update(body);
}

function* updatePatientSaga(action) {
  let res;
  console.log('update patient saga===>', action);
  try {
    res = yield call(UpdatePatientApi, action.body);
    console.log('res==>Update', res);
    yield put(updatePatientSuccess());
  } catch (e) {
    console.log('update pateint failed==>', e);
    yield put(updatePatientError());
  }
}

// update patient

export function* watchPatientSagas() {
  yield takeLatest(ADD_PATIENT_REQUEST, addPatinetSaga);
  yield takeLatest(GET_PATEINT_REQUEST, getPatinetSaga);
  yield takeLatest(DEL_PATEINT_REQUEST, deletePateintSaga);
  yield takeLatest(UPDATE_PATIENT_REQUEST, updatePatientSaga);
}
