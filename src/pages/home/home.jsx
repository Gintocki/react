import React from 'react';
import ActionForm from './components/actionForm';
import Table from './components/table';
import LogoutContainers from '../../containers/logout';

const Home = () => (
  <section className="home">
    <ActionForm />
    <Table />
    <LogoutContainers />
  </section>

);
export default Home;
