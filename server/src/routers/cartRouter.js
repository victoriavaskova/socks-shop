const express = require('express');
const CartService = require('../services/cartService');
const verifyUser = require('../middlewares/VerifyUser');

const cartRouter = express.Router();


cartRouter.get('/cart', verifyUser, async (req, res) => {
  const userId = req.user.id; 

  try {
  
    const sockId = await CartService.getSockIdByUserId(userId);

   
    res.status(200).json({ sockId });
  } catch (error) {
    console.error('Ошибка при получении ID носка:', error);
    res.status(500).json({ message: error.message || 'Ошибка сервера' });
  }
});

module.exports = cartRouter;