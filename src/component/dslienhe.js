import React from 'react';
import { Table } from 'reactstrap';

const Dslienhe = (props) => {
    //console.log("data2:"+props.data);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Name</th>
          <th>Select</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody>
          {
              props.data.map(user=>(
                <tr>
                <th scope="row">1</th>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.select}</td>
                <td>{user.file}</td>
              </tr>
              ))
          }
      </tbody>
    </Table>
  );
}

export default Dslienhe;