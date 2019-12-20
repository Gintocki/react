import { LOGOUT_USER, ADD_USERS, GET_USERS } from '../actionTypes';

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case ADD_USERS:
      return [...state, action.users];
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default users;
