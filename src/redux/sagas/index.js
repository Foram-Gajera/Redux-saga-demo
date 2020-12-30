import { all } from "redux-saga/effects";
import { userSaga, deleteSaga, addSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([userSaga(), deleteSaga(), addSaga()]);
}
