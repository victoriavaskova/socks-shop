'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const socks = [
      {
        color: 'Черный',
        pattern: 'без принта',
        image: '/black.png'      },
      {
        color: 'Красный',
        pattern: 'без принта',
        image: '/red.png'},
      {
        color: 'Белый',
        pattern: 'без принта',
        image: '/white.png'    
      },
      {
        color: 'Фиолетовый',
        pattern: 'без принта',
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
