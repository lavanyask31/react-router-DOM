import React from 'react';
import { NavLink } from 'react-router-dom';
export default function E1Component() {
  return (
    <div class="Home-body">
      <h2>Expenses Page 1</h2>
      <NavLink to="/home">
        <h6>Home</h6>
      </NavLink>
    </div>
  );
}
