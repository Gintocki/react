import { FETCH_USER_SUCCESS } from '../actionTypes';

const userRevisitSuccess = (payload) => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

const userRevisit = () => async (dispatch) => {
  try {
    const tokenId = sessionStorage.getItem('token');
    const response = await fetch('accounts.json');
    const users = await response.json();
    const user = users.filter((item) => item.id == tokenId);
    if (!user.length) {
      sessionStorage.removeItem('token');
    }
    return dispatch(userRevisitSuccess(user[0]));
  } catch (err) {
    return console.log(err);
  }
};

export default userRevisit;
