import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ЛОГО</div>
      <ul className="navbar-links">
        <li><a href="/signup">РЕГИСТРАЦИЯ</a></li>
        <li><a href="/login">ВХОД</a></li>
        <li><a href="/favorites">ИЗБРАННОЕ</a></li>
        <li><a href="/cart">КОРЗИНА</a></li>
      </ul>
    </nav>
  );
}