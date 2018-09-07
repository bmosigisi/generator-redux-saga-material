import { takeEvery, all, fork } from 'redux-saga/effects';

import { actionTypes } from '../actions';

// ------ Helpers ---------=
function* upstart() {
  yield true;
}

// ------ Handlers --------
function* handleFetchTodos() {
  yield true;
}

// ------ Watchers --------
function* watchFetchTodos() {
  yield takeEvery(actionTypes.FETCH_TODOS.BEGIN, handleFetchTodos);
}

export default function* root() {
  yield* upstart();

  yield all([
    fork(watchFetchTodos),
  ]);
}
