import React from "react";
import "../CSS/tablecomponent.css";

const TableComponent = ({ data }) => {
    console.log(data); 
    return (
      <div className="table-container">
        <h3>User Details</h3>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.fullName}</td>
                <td>{entry.number}</td>
                <td>{entry.gender}</td>
                <td>{entry.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default TableComponent;
