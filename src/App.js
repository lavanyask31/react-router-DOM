import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MainHomePage from './components/Home/MainHomePage';


import './style.css';

// Hi . Create a web app with a login page which will accept only "admin" as username and "password" as password, anything other than these should give incorrect username/password error. Once right username and password is entered, it should route me to home page (use react-router-dom https://reactrouter.com/docs/en/v6/getting-started/overview for routing). In home page, let there be a card called datatracker. Once I click on datatracker, I must take me to that electricity tracker page. you can copy that code into this

// if you want, instead of copying that electricity code, you can write it from scratch to make yourself clear with concepts

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/*" element={<MainHomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
