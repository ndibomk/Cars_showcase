import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from'./Usersarray'; // Assuming you have the 'users' array defined in a separate file

const Users = () => {
  return (
    <div className='usersdashtbl'>
      <h2 className='dashheaders'>All Users</h2>
      <Table bordered hover responsive style={{ border: "2px solid  rgb(92, 92, 92)" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Passcode</th>
            <th>Address</th>
            <th>County</th>
            <th>Town</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.passcode}</td>
              <td>{user.address}</td>
              <td>{user.county}</td>
              <td>{user.town}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
