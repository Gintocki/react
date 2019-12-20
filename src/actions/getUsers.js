import { GET_USERS } from '../actionTypes';

export const getUsersSuccess = (payload) => ({
  type: GET_USERS,
  payload,
});

export const getUsers = () => async (dispatch) => {
  try {
    const response = await fetch('accounts.json');
    const users = await response.json();

    return dispatch(getUsersSuccess(users));
  } catch (error) {
    return console.log(error);
  }
};
