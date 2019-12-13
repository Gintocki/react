import React from 'react';
import ActionFormContainer from '../../containers/actionForm';
import TableContainer from '../../containers/Table';
import LogoutContainers from '../../containers/logout';

const Home = () => (
  <section className="home">
    <ActionFormContainer />
    <TableContainer />
    <LogoutContainers />
  </section>

);
export default Home;
