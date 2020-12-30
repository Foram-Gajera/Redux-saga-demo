import * as actionTypes from "../types";

export function getUsers() {
  return {
    type: actionTypes.GET_USERS_REQUESTED,
    // payload: users,
  };
}

export function deleteUsers(id) {
  return {
    type: actionTypes.DELETE_USERS_REQUESTED,
    payload: id,
    // payload: users,
  };
}

export function addUser(user) {
  return {
    type: actionTypes.ADD_USERS_REQUESTED,
    payload: user,
    // payload: users,
  };
}
