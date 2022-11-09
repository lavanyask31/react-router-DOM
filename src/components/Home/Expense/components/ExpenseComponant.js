import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Expenses() {
  return (
    <div class="Home-body">
      <h2>Expense</h2>
    
      <NavLink to="/home/expense/e1">
        <h3>E1 page</h3>
      </NavLink>
    
      <NavLink to="/home/expense/e2">
        <h3>E2 Page</h3>
      </NavLink>
      <NavLink to="/home">
        <h6>Home</h6>
      </NavLink>
    </div>
  );
}
