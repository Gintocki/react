import { ADD_USERS } from '../actionTypes';

export const addUsersSuccess = (users) => ({
  type: ADD_USERS,
  users,
});

export const addUsers = (name, surname, age) => (dispatch) => {
  try {
    return dispatch(addUsersSuccess({
      id: Date.now(), name, surname, age,
    }));
  } catch (err) {
    console.log(err);
  }
};

export default addUsers;
