import React, { useState, useEffect } from "react";
import axiosInstance from "../../shared/lib/axiosinstance";
import './favoritePage.css';
export default function FavoriteForm(){
  const [socks, setSocks] = useState([])
  
  useEffect(() => {
    try {
      axiosInstance('/favorites').then((res) => {
        const socksData = res.data.allFavorites;
        setSocks(socksData);
        console.log(socksData, socks)
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
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
        <h1>Избранное</h1>
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
        </div>
        <div className="price-info">
          <div className="price">Цена: 100$</div>
        </div>

        </div>
        
        )
      )}
          <button className="order-button" onClick={handleAddToCart}> Добавить в корзину</button>
      </div>
      </>
  );
};
