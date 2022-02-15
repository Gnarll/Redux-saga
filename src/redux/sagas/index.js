import { takeEvery } from "redux-saga/effects";

const getPeople = async () => {
  const request = await fetch("https://swapi.dev/api/people?_limit=10");
  const data = request.json();
  return data;
};

export function* workerSaga() {
  const data = yield getPeople();
  console.log(data);
}

export function* watchClickSaga() {
  yield takeEvery("CLICK", workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
