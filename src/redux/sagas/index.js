import { all } from "redux-saga/effects";
import { userSaga, deleteSaga, addSaga, updateSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([userSaga(), deleteSaga(), addSaga(), updateSaga()]);
}
