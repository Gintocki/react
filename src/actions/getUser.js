import { FETCH_USER_SUCCESS } from '../actionTypes';

export const fetchUserSuccess = (payload) => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUser = (email, password) => async (dispatch) => {
  try {
    const response = await fetch('accounts.json');
    const users = await response.json();

    const user = users.filter((item) => {
      if (item.email === email && item.password === password) {
        return item;
      }
      if (item.email === email || item.password === password) {
        return alert('Неверный логин или пароль');
      }
    });
    sessionStorage.setItem('token', user[0].id);
    return dispatch(fetchUserSuccess(user[0]));
  } catch (error) {
    return console.log(error);
  }
};
