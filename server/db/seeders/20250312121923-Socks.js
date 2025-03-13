'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const socks = [
      {
        color: 'Черный',
        pattern: '',
        image: '/black.png'},
      {
        color: 'Красный',
        pattern: '',
        image: '/red.png'},
      {
        color: 'Белый',
        pattern: '',
        image: '/white.png'    
      },
      {
        color: 'Фиолетовый',
        pattern: '',
        image: '/purple.png'      
      },
        {
          color: 'Черный',
          pattern: 'Сердечки',
          image: '/black_hearts.png'
        },
        {
          color: 'Красный',
          pattern: 'Сердечки',
          image: '/red_hearts.png'
        },
        {
          color: 'Белый',
          pattern: 'Сердечки',
          image: '/white_hearts.png'
        },
        {
          color: 'Фиолетовый',
          pattern: 'Сердечки',
          image: '/purple_hearts.png'
        },
        {
          color: 'Черный',
          pattern: 'Полосы',
          image: '/black_line.png'
        },
        {
          color: 'Красный',
          pattern: 'Полосы',
          image: '/red_line.png'
        },
        {
          color: 'Белый',
          pattern: 'Полосы',
          image: '/white_line.png'
        },
        {
          color: 'Фиолетовый',
          pattern: 'Полосы',
          image: '/purple_line.png'
        },
        {
          color: 'Черный',
          pattern: 'Кораблики',
          image: '/black_line.png'
        },
        {
          color: 'Красный',
          pattern: 'Кораблики',
          image: '/red_line.png'
        },
        {
          color: 'Белый',
          pattern: 'Кораблики',
          image: '/white_line.png'
        },
        {
          color: 'Фиолетовый',
          pattern: 'Кораблики',
          image: '/purple_line.png'
        },
        {
          color: 'Черный',
          pattern: 'Облака',
          image: '/black_clouds.png'
        },
        {
          color: 'Красный',
          pattern: 'Облака',
          image: '/red_clouds.png'
        },
        {
          color: 'Белый',
          pattern: 'Облака',
          image: '/white_clouds.png'
        },
        {
          color: 'Фиолетовый',
          pattern: 'Облака',
          image: '/purple_clouds.png'
        }
    ];
    await queryInterface.bulkInsert('Socks', socks, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
