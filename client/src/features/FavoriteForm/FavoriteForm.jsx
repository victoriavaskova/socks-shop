import React, { useState, useEffect } from "react";
import axiosInstance from "../../shared/lib/axiosinstance";
import  '../CartForm/cartStyles.css' 
export default function FavoriteForm(){
  const [socks, setSocks] = useState([])
  
  useEffect(() =>{
    try {
      axiosInstance("/favorites").then((res) => {
        setFavorites(res.data.favoriteItem);
      });
    } catch (error) {
      console.log(error);
    }
  }, [])

  // const handleRemoveFromFavorites = async (sockId) => {
  //   try {
  //     await axiosInstance.delete(`/favorites/${sockId}`); // Удаление из избранного
  //     setFavorites(favorites.filter((item) => item.sockId !== sockId));
  //   } catch (error) {
  //     console.error('Ошибка при удалении товара из избранного:', error);
  //   }
  // };

   const handleAddToCart = async (sockId) => {
    try {
      await axiosInstance.post('/cart', { sockId }); // Добавление в корзину
      setFavorites(favorites.filter((item) => item.sockId !== sockId));
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину:', error);
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
          <p>В избранном пока ничего нет</p>
          <button onClick={handleAddToCart}> Добавить в корзину</button>
      </div>
      </>
  );
};
