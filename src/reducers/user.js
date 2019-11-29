import { FETCH_USER_SUCCESS, LOGOUT_USER } from '../actionTypes';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload;
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default user;
