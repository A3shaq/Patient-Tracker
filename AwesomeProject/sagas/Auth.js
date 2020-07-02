import {put, takeLatest, call} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {
  SIGNUP_REQUSET,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_USER_DATA_REQUEST,
} from '../config/Types';
import {firebase} from '../config/firebase';
import {signUpSuccess, signUpError, setUser} from '../redux/actions/Auth';
// import {set} from 'react-native-reanimated';

// function insertEventChanel(item) {
//   const listener = eventChannel((emit) => {
//     //console.log('emit', emit)
//     firebase
//       .database()
//       .ref(`users/${item.uid}`)
//       .on('child_added', (data) => emit(data))
//       // .child()
//       .set(item);
//     return () => firebase.database.ref().off(listener);
//     // .on('user_added', data => emit(data.val())
//   });
//   // const newItemRef = firebase.database().ref().child(`users/${users.uid}`);
//   // return newItemRef.set(item);

//   return listener;
// }

// set users obj to db after signup
function* setUserSaga(action) {
  console.log('setUserSaga', action);
  let res;
  let userAdd;
  console.log('saga setUserSaga', action);

  try {
    res = yield firebase
      .database()
      .ref(`users/${action.userObj.uid}`)
      // .child()
      .set(action.userObj);
    console.log(res, 'resssssss');
    alert('Signup Success');
  
    // .then((success) => alert('Signup Successfux`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxll'));
    // console.ignoredYellowBox = ['Setting a timer'];
  } catch (e) {
    alert('abc error', e);
  }
}
// set users after signup

//signup saga
function* signUpSaga(action) {
  let res;
  // let userAdd;
  console.log('saga action', action);

  try {
    res = yield firebase
      .auth()
      .createUserWithEmailAndPassword(action.email, action.password);
    // console.log('Sign up Saga', res.user.uid);
    let userObj = {
      name: action.name,
      email: action.email,
      password: action.password,
      uid: res.user.uid,
    };
    console.log('userObj', userObj.uid);
    yield put(setUser(userObj));
  } catch (e) {
    alert('error');
  }
}

//signup saga

export function* watchAuthentication() {
  yield takeLatest(SIGNUP_REQUSET, signUpSaga);
  yield takeLatest(SET_USER_DATA_REQUEST, setUserSaga);
}
