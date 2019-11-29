import React from 'react';
import Row from './row';

const Table = () => (
  <table className="table home__table">
    <thead className="thead-dark">
      <th>Name</th>
      <th>Surname</th>
      <th>Age</th>
    </thead>
    <tbody>
      <Row />
    </tbody>
  </table>
);

export default Table;
