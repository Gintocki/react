import React from 'react';
import Row from './row';

const Table = ({ users }) => {
  const content = users.map((u) => <Row key={u.id} user={u} />);

  return (
    <table className="table home__table">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {content}
      </tbody>
    </table>
  );
};

export default Table;
