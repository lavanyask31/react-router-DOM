import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import { useNavigate } from 'react-router-dom';
export default function LoginContainer() {
  const temp = {
    username: '',
    password: '',
  
  };
  const [loginForm, setLoginForm] = useState(temp);
  const navigate = useNavigate();
  function handleChange(e) {
    let tempo = { ...loginForm };
    tempo[e.target.name] = e.target.value;
    setLoginForm({ ...tempo });
  }
  function checkUser() {
    // console.log('Success');
    if (loginForm.username !== 'admin' || loginForm.password !== 'admin123')
      alert('Please valid correct user name and password');
    else {
      navigate('/home');
      console.log('Success');
    }
  }
  return (
    <LoginComponent
      checkUser={checkUser}
      loginForm={loginForm}
      handleChange={handleChange}
    />
  );
}


