import * as actionTypes from "../types";
const initialState = {
  users: [],
  loading: false,
  erorr: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };

    case actionTypes.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
};

export default users;
