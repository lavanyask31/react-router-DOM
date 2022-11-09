import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomeComponent() {
  return (
    <div class="Home-body">
      <NavLink to="/home/expense">
        <h3>EXPENSE</h3>
      </NavLink>
    
      <NavLink to="/home/invoice">
        <h3>INVOICE</h3>
      </NavLink>
    </div>
  );
}
