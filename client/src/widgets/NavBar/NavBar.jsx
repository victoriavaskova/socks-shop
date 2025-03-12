import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import './NavBar.css';
import logo from './logo.jpg';

export default function NavBar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        
        <ul className="navbar-links">
          <li><Link to="/signup">РЕГИСТРАЦИЯ</Link></li>
          <li><Link to="/login">ВХОД</Link></li>
        </ul>
      </div>

      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/favorites">ИЗБРАННОЕ</Link></li>
          <li><Link to="/cart">КОРЗИНА</Link></li>
        </ul>
      </div>
    </nav>
  );
}