import React from 'react';
import { NavLink } from 'react-router-dom';
export default function InvoiceComponent() {
  
  return (
    <div class="Home-body">
      <h2>Invoice</h2>
   
      <NavLink to="/home/invoice/i1">
        <h3>I1 page</h3>
      </NavLink>
     
      <NavLink to="/home/invoice/i2">
        <h3>I2 Page</h3>
      </NavLink>
      <NavLink to="/home">
        <h6>Home</h6>
      </NavLink>
    </div>
  );
}

