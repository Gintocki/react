import React from 'react';
import ActionForm from './components/actionForm';
import Table from './components/table';
import LoginOut from './components/loginout';

const Home = () => (
  <section className="home">
    <ActionForm />
    <Table />
    <LoginOut />
  </section>

);
export default Home;
