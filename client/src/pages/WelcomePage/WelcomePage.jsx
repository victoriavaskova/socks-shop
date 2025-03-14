import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';


export default function WelcomePage({user}) {
    return (
      <div className="welcome-container">
        <h1>Добро пожаловать в мир уникальных носков! 🧦</h1>
        <p>
          Хотели бы вы носить носки, которые идеально отражают ваш стиль и настроение? В нашем магазине кастомных носков 
          вы можете создать свой уникальный дизайн! Хотите носки в горошек, с котиками или узором в стиле 80-х? 🎨🐱  
          Всё возможно!
        </p>
        <p>
          Просто выберите цвет, добавьте любимый узор и украсьте носки картинкой на свой вкус. А когда закончите — 
          добавьте их в корзину или в избранное. Устройте праздник для своих ног! 🥳
        </p>
        {user.status === "logged" && <Link to="/createsocks" className="button">Создать свои носки</Link>}
        
        {user.status !== "logged" &&
        <p className="note">
          Чтобы начать, вам нужна <Link to="/signup">регистрация</Link> 😉
        </p>}
      </div>
    );
  }


