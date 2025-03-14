const { Cart } = require('../../db/models');

class CartService {

  static async getSockIdByUserId(userId) {
    if (!userId) throw new Error('ID пользователя не передан');

   
    const cartItem = await Cart.findOne({
      where: { userId },
      attributes: ['sockId'], 
    });

    if (!cartItem) throw new Error('Корзина пуста или запись не найдена');

    return cartItem.userId;
  }
}

module.exports = CartService;