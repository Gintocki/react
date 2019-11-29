import React from 'react';

const ActionForm = () => (
  <form action="#" className="home__form" onSubmit={(e) => e.preventDefault()}>
    <span className="home__form__title">Add form</span>
    <div className="home__form__block-inpts">
      <input type="text" className="form-control home__form__input" placeholder="Name" required />
      <input type="text" className="form-control home__form__input" placeholder="Surname" required />
      <input type="number" className="form-control home__form__input" placeholder="Age" required />
    </div>
    <div className="home__form__block-btn">
      <button type="submit" className="btn btn-primary home__form__btn">Add</button>
    </div>
  </form>
);
export default ActionForm;
