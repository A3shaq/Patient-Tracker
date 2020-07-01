import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './index';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagas);

// store.dispatch({
//     type: 'Heloo',
// });

export {store};
