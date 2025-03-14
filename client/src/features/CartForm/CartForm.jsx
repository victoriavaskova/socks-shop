import React, { useState, useEffect } from 'react';
import './cartStyles.css';
import axiosInstance from '../../shared/lib/axiosinstance';

const CartForm = () => {
  const [socks, setSocks] = useState([]);
  const [quantities, setQuantities] = useState({});
  

  useEffect(() => {
    try {
      axiosInstance('/cart').then((res) => {
        const socksData = res.data.allSocks;
        setSocks(socksData);

        const initialQuantities = {};
        socksData.forEach((el) => {
          initialQuantities[el.id] = el.quantity || 1;
        });
        setQuantities(initialQuantities);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) - 1, 1),
    }));
  };

  const totalPrice = socks.reduce((total, el) => {
    const quantity = quantities[el.id] || 1;
    const price = el.Sock.price || 100;
    return total + quantity * price;
  }, 0);

  const deleteHandler = async (id) => {
    try {
    const res = await axiosInstance.delete(`/cart/${id}`);
    if (res.status === 204) {
      setSocks((prev) => prev.filter((el) => el.id !== id));
    }
  } catch (error) {
    console.log(error);
    alert("Что-то пошло не так");
  }}

  return (
    <>
      <div className="cart-container">
        <div className="header">
          <h1>Корзина</h1>
        </div>
        {socks.map((el) => (
          <div key={el.id} className="content">
            <div className="image-container">
              <img src={el.Sock.image} alt={el.Sock.color} />
            </div>
            <div className="sock-info">
              <p>Цвет: {el.Sock.color}</p>
              <p>Узор: {el.Sock.pattern}</p>
              <button className="sock-button-delete" onClick={() => deleteHandler(el.id)}>
                Удалить
              </button>
            </div>

            <div className="counter">
              <button onClick={() => handleDecrement(el.id)}>-</button>
              <span>{quantities[el.id] || 1}</span>
              <button onClick={() => handleIncrement(el.id)}>+</button>
            </div>
            <div className="price-info">
              <div className="price">Цена: {100 * (quantities[el.id] || 1)} $</div>
            </div>
          </div>
        ))}
        <div className="total">Итоговая стоимость: {totalPrice}$</div>
        <button className="order-button">Заказать</button>
      </div>
    </>
  );
};

export default CartForm;
