import React from 'react';
import Row from './row';

const Table = ({ users }) => (
  <table className="table home__table">
    <thead className="thead-dark">
      <th>Name</th>
      <th>Surname</th>
      <th>Age</th>
    </thead>
    <tbody>
      {users.map((u) => <Row id={u.id} user={u} />)}
    </tbody>
  </table>
);

export default Table;
