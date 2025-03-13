import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import './NavBar.css';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import logo from './logo.jpg';

export default function NavBar({logoutHandler, user}) {
  return (
    <nav className="navbar">
      
      <div className="navbar-left">
      {user.status === "logged" ? `Привет ${user.data.name}!` : "Welcome Guest"}
      </div>
      
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>

      {user.status === "logged" ? (<><div className="navbar-right">
        <ul className="navbar-links">
          
          <li onClick={logoutHandler}><Link to="/">ВЫХОД</Link></li>
          <li><Link to="/favorites">
          ИЗБРАННОЕ  <FaHeart />
          </Link></li>
          <li><Link to="/cart">
          КОРЗИНА <FaShoppingCart /> 
          </Link></li>
        </ul>
      </div></>):(<ul className="navbar-links">
          <li><Link to="/signup">РЕГИСТРАЦИЯ</Link></li>
          <li><Link to="/login">ВХОД</Link></li>
        </ul>)}
      
    </nav>
  );
}