import React from 'react';
import { NavLink } from 'react-router-dom';
export default function I2Component() {
  return (
    <div class="Home-body">
      <h2>Invoice Page 2</h2>
      <NavLink to="/home">
        <h6>Home</h6>
      </NavLink>
    </div>
  );
}
