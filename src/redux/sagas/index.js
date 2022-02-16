import { call, takeEvery, put, fork, join, spawn, select } from "redux-saga/effects";

const swapiGet = async (pattern) => {
  const request = await fetch(`https://swapi.dev/api/${pattern}`);
  const data = request.json();
  return data;
};

export function* loadPeople(){
  const people = yield call(swapiGet, 'people');
  yield put({type: 'SET_PEOPLE', payload: people.results})
}

export function* loadPlanets(){
  const planets = yield call(swapiGet, 'planets')
  yield put({type: 'SET_PLANETS', payload: planets.results})
}

export function* workerSaga() {
  const task = yield fork(loadPeople)
  yield spawn(loadPlanets)
  const store = yield select(s => s)
  console.log(store)
}

export function* watchLoadDataSaga() {
  yield takeEvery("CLICK", workerSaga);
}

export default function* rootSaga() {
  yield watchLoadDataSaga();
}
