import React from 'react';
import cars from './Cars';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Users = () => {
  return (
    <div className='usersdashtbl' >
      <h4 className='dashheaders'>Our products</h4>
      <Table  bordered hover responsive style={{ border: "2px solid  rgb(92, 92, 92)" }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Model</th>
            <th>Availability</th>
            <th>Transmission</th>
            <th>Exterior</th>
            <th>Fuel</th>
            <th>Drive</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.itemName}</td>
              <td>{car.description}</td>
              <td>
                <img src={car.imageUrl} alt={car.itemName}  />
              </td>
              <td>{car.model}</td>
              <td>{car.availability}</td>
              <td>{car.transmission}</td>
              <td>{car.exterior}</td>
              <td>{car.fuel}</td>
              <td>{car.drive}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
