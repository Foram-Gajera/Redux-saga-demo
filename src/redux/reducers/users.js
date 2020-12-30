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

    case actionTypes.DELETE_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.DELETE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case actionTypes.DELETE_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case actionTypes.ADD_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.ADD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.user],
      };
    case actionTypes.ADD_USERS_FAILED:
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
