import React from 'react';


const Row = ({ user }) => (
  <tr>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.age}</td>
  </tr>
);

export default Row;
