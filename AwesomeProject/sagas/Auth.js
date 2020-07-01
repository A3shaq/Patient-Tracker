import {put, takeLatest} from 'redux-saga/effects';
import {SIGNUP_REQUSET, SIGNUP_SUCCESS, SIGNUP_ERROR} from '../config/Types';
import {firebase} from '../config/firebase';

function* signUpSaga(action) {
  let res;
  let userAdd;
  console.log('saga action', action);

  try {
    res = yield firebase
      .auth()
      .createUserWithEmailAndPassword(action.email, action.password);
    console.log('Sign up Saga', res.user.uid);
    let userObj = {
      name: action.name,
      email: action.email,
      password: action.password,
      uid: res.user.uid,
    };

    firebase
      .database()
      .ref()
      .child(`users/${users.uid}`)
      .set(userObj)
      .then((res) => {
        alert('Signup Successfull');
      });
    if (userAdd) {
    } else {
      alert('push data erro');
    }
    // yield put(getBankAccountsSuccess(res.data.data));
    // if (action.cb) {
    //   action.cb(null, res.data.data);
    // }
  } catch (e) {
    alert('error');
    // if (e.response) {
    //   info('error', `${e.response.data.error.message}`);
    // }
    // if (action.cb) {
    //   action.cb(e);
    // }
    // yield put(getBankAccountsError());
  }
}

export function* watchAuthentication() {
  yield takeLatest(SIGNUP_REQUSET, signUpSaga);
}
