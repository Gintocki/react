import React from 'react';

const logout = () => (
  sessionStorage.removeItem('token')
);

const LoginOut = () => (
  <div className="home__block-loginout">
    <button type="button" className="btn btn-primary home__loginout__btn" onClick={logout}>LoginOut</button>
  </div>
);
export default LoginOut;
