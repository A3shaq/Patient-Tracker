import { all } from 'redux-saga/effects'
import {watchAuthentication} from "./Auth"
// import { watchAuthActions } from "./Auth"


export default function* rootSaga() {
  yield all([
    watchAuthentication()
    // watchAuthActions(),
   
  ]);
}
