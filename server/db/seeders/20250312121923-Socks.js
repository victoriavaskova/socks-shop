'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const socks = [
      {
        color: 'Черный',
        pattern: 'без принта',
        image: 'https://cdn.demix.ru/upload/mdm/media_content/resize/439/1000_1000_9b06/67270740299.jpg',
      },
      {
        color: 'Красные',
        pattern: 'без принта',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCREmr28nEghIfiZnbdITDiIsN3O5cggKgkg&s',
      },
      {
        color: 'Синие',
        pattern: 'без принта',
        image: 'https://art-sfera.info/assets/images/products/138121/ee0ea9540bc5a315.jpg',
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
