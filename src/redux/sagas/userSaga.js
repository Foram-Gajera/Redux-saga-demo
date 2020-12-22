import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi() {
  return axios.get(apiUrl).then((res) => res.data);
  // return fetch(
  //   apiUrl
  //   // {
  //   //   method: "GET",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   // }
  // )
  //   .then((res) => {
  //     debugger;
  //     // console.log("daaaaaaaaaa" + res.json());
  //     res.json();
  //   })
  //   .catch((err) => {
  //     debugger;
  //     throw err;
  //   });
}

function* fetchUsers(action) {
  try {
    // debugger;
    const users = yield call(getApi);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    // debugger;
    yield put({ type: "GET_USERS_FAILED", message: e.message });
  }
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}

export default userSaga;
