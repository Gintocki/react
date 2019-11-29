import React from 'react';

const AuthForm = ({ authorization, handleChange }) => (
  <form action="#" className="auth__sign-in" onSubmit={(e) => e.preventDefault()}>
    <span className="auth__sign-in__title">Sign-in</span>
    <input type="email" name="email" className="form-control auth__sign-in__input" placeholder="Email" required onChange={handleChange} />
    <input type="password" name="password" className="form-control auth__sign-in__input" placeholder="Password" required onChange={handleChange} />
    <button type="submit" className="btn btn-success auth__sign-in__btn" onClick={authorization}>Login</button>
  </form>
);

export default AuthForm;
