import * as actionTypes from "../types";

export function getUsers() {
  return {
    type: actionTypes.GET_USERS_REQUESTED,
    // payload: users,
  };
}
