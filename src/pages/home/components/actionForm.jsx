import React from 'react';

const ActionForm = ({ handleChange, add }) => (
  <form action="#" className="home__form" onSubmit={(e) => e.preventDefault()}>
    <span className="home__form__title">Add form</span>
    <div className="home__form__block-inpts">
      <input type="text" name="name" className="form-control home__form__input" placeholder="Name" required onChange={handleChange} />
      <input type="text" name="surname" className="form-control home__form__input" placeholder="Surname" required onChange={handleChange} />
      <input type="number" name="age" className="form-control home__form__input" placeholder="Age" required onChange={handleChange} />
    </div>
    <div className="home__form__block-btn">
      <button type="submit" className="btn btn-primary home__form__btn" onClick={add}>Add</button>
    </div>
  </form>
);
export default ActionForm;
