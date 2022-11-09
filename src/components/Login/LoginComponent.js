import React from 'react';
import { NavLink } from 'react-router-dom';
export default function FinalTableComponent({
  checkUser,
  handleChange,
  loginForm,
}) {
  return (
    <div className="Login">
      <div className="login-title">
        <h2>LOGIN</h2>
      </div>
      <div className="user-name">
        <input
          type="text"
          name="username"
          value={loginForm.username}
          placeholder="Enter user name"
          onChange={handleChange}
        />
      </div>
      <div className="password">
        <input
          type="password"
          name="password"
          value={loginForm.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
      </div>
      <div className="login-submit">
        {/* <NavLink to="/home">
        <input type="submit" value="SUBMIT"  />
        </NavLink> */}

        <input type="submit" value="SUBMIT" onClick={checkUser} />
      </div>
    </div>
  );
}
