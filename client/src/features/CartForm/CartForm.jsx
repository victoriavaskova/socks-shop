import React, { useState } from 'react';
import  './cartStyles.css'; 

const CartForm = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 1000;
  const totalPrice = quantity * pricePerItem;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    
    <div className="cart-container">
      <div className="header">
        <h1>Корзина</h1>
      </div>

      <div className="content">
        <div className="image-container">
          <img src="/public/red.png" alt="sock_Img" />
        </div>
        <div className="counter">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className="price-info">
          <div className="price">Цена: ${pricePerItem}</div>
          <div className="total">ИТОГО: ${totalPrice}</div>
        </div>
      </div>

      <div className="order-button-div">
        <button className="order-button">Заказать</button>
      </div>
    </div>
    
  );
};

export default CartForm;