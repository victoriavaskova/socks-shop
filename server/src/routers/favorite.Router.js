const favoriteRouter = require('express').Router();
const { User, Socks, Favorite} = require('../../db/models');
const {verifyAccessToken, verifyRefreshToken } = require('../middlewares/VerifyTokens')

favoriteRouter.get('/', verifyAccessToken, async (req, res) => {
    try {
      const userId = res.locals.user.id;
  
      if (!userId) {
        return res.status(400).json({ error: 'Не указан userId' });
      }
  
      const allFavorites = await Favorite.findAll({
        where: { userId },
        include: [{model: Socks}],
      })
  
      res.json({allFavorites})
      console.log('Получены избранные', allFavorites);
      
    } catch (error) {
      console.error('Ошибка при добавлении в корзину:', error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  });


module.exports = favoriteRouter;