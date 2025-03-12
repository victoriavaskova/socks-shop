import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import './NavBar.css';
import logo from './logo.jpg';

export default function NavBar({logoutHandler, user}) {
  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        
        <ul className="navbar-links">
          <li><Link to="/signup">РЕГИСТРАЦИЯ</Link></li>
          <li><Link to="/login">ВХОД</Link></li>
        </ul>
      </div>
<div>{user.status === "logged" ? `Привет ${user.data.name}` : "Guest"}</div>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
            <li onClick={logoutHandler} >ВЫХОД</li>
          <li><Link to="/favorites">ИЗБРАННОЕ</Link></li>
          <li><Link to="/cart">КОРЗИНА</Link></li>
        </ul>
      </div>
    </nav>
  );
}