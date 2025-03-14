import React, { useState, useEffect } from 'react';
import  './cartStyles.css'; 
import axiosInstance from "../../shared/lib/axiosinstance";

const CartForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [socks, setSocks] = useState([])
  const pricePerItem = 1000;
  const totalPrice = quantity * pricePerItem;
  
  useEffect(() => {
    try {
      axiosInstance("/cart").then((res) => {
        setSocks(res.data.allSocks);
      });
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  


  return (
    <>
    <div className="cart-container">
      <div className="header">
        <h1>Корзина</h1>
      </div>
      {socks.map((el) => (
        <div key={el.id} className='content'>
          <div className="image-container">
          <img src={el.Sock.image} alt={el.Sock.color} />
        </div>
        <div className='sock-info'>
          <p>Цвет: {el.Sock.color}</p>
          <p>Узор: {el.Sock.pattern}</p>
          </div>

          <div className="counter">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className="price-info">
          <div className="price">Цена: ${pricePerItem}</div>
        </div>

        </div>
        
        )
      )}
      
        
    
      
      <div className="order-button-div">
      </div>

      <div className="total">ИТОГО: ${totalPrice}</div>
      <button className="order-button">Заказать</button>
    </div>
    </>
  );
};

export default CartForm;