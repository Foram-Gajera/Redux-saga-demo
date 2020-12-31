import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

// const apiUrl = "https://jsonplaceholder.typicode.com/users/";

export const apiUrl = "https://user-saga-default-rtdb.firebaseio.com/";
function getApi() {
  return axios.get(apiUrl + "users.json").then((res) => {
    // debugger;
    let users = [];
    for (const key in res.data) {
      users.push({ id: key, ...res.data[key] });
    }
    return users;
  });
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

// function deleteApi() {
//   debugger;
//   return axios
//     .delete(apiUrl, 1)
//     .then(
//       (res) => res
//       // console.log(res.data);
//     )
//     .catch((err) => err);
// }

function* deleteUser(action) {
  try {
    const userId = action.payload;
    console.log("delete try", action.payload);
    let data;
    yield axios
      .delete(apiUrl + `users/${userId}.json`)
      .then((res) => {
        // debugger;
        alert("record deleted successfully!");
        console.log("deleted successfully!");
      })
      .catch((err) => console.log(err));
    yield put({ type: "DELETE_USERS_SUCCESS", payload: userId });
    // const users = yield call(getApi);
    // debugger;
    // yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    console.log("delete catch");
    yield put({ type: "DELETE_USERS_FAILED", message: e.message });
  }
}

function* fetchUsers(action) {
  try {
    // debugger;
    const users = yield call(getApi);
    // debugger;
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    // debugger;
    yield put({ type: "GET_USERS_FAILED", message: e.message });
  }
}

function* addUser(action) {
  const user = action.payload;
  try {
    console.log("add user");
    yield axios
      .post(apiUrl + "users.json", user)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    yield put({ type: "ADD_USERS_SUCCESS", user: user });
  } catch (e) {
    console.log("add user fail");
    yield put({ type: "ADD_USERS_FAILED", message: e.message });
  }
}

function* updateUser(action) {
  const user = action.payload;
  try {
    console.log("update user");
    yield axios
      .put(apiUrl + `users/${user.id}.json`, user)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    yield put({ type: "UPDATE_USERS_SUCCESS", user: user });
  } catch (e) {
    console.log("update user fail");
    yield put({ type: "UPDATE_USERS_FAILED", message: e.message });
  }
}

export function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}

export function* deleteSaga() {
  yield takeLatest("DELETE_USERS_REQUESTED", deleteUser);
}

export function* addSaga() {
  yield takeLatest("ADD_USERS_REQUESTED", addUser);
}

export function* updateSaga() {
  yield takeLatest("UPDATE_USERS_REQUESTED", updateUser);
}
