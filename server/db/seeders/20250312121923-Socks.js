'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const socks = [
      {
        color: 'Черный',
        pattern: 'без принта',
        image: 'https://3.downloader.disk.yandex.ru/preview/71bcd6a886ea2f048ecffa8287ec5aff7194279a465ff82a7ac407bf74f3f01e/inf/UqqjEVqzqlYWPn794IGCg7MxSKc1349kUXGDMEfYztZ9AvFQpsFcKQ89UhpAB_MLoz951USIJlViHBi16-mHqA%3D%3D',
      },
      {
        color: 'Красный',
        pattern: 'без принта',
        image: 'https://1.downloader.disk.yandex.ru/preview/617b4abfb4ca24300cb18ad28643f51913925e98e00841e77015a14b64e6ad15/inf/uv7XbrhDGvvQUn6en-CAziS2-usuXTMB27wkwVsNmryFRhFG7ChGTDqznS515Wl-1AVXiSAejOmQpqLrBi8DhA%3D%3D',
      },
      {
        color: 'Синий',
        pattern: 'без принта',
        image: 'https://4.downloader.disk.yandex.ru/preview/6f183ddb4bc24a693ccb1675f950927e76662caae1292409947bf1362b8a672f/inf/TyceTH5_h0vKz46sBtOs-hnGmfjRwX500b0GoogXmoSwL2qlWQuPXecjEAD8L9mRcMRsGF0_0XK64_GUKF2J4Q%3D%3D',
      },
      {
        color: 'Белый',
        pattern: 'без принта',
        image: 'https://3.downloader.disk.yandex.ru/preview/3987428cc8450313ab8d2ae7545a75ea58c9c00d344cc9d583cd89668d4efb3e/inf/wiAAmjQDDT4Z-izxRHjGqDyVyf1AhZGHs1kUI0QoPb50hnOGb7rYTRLpGH5jkfiLEJT68tIjt5MdCqacyIGzcg%3D%3D',
      },
      {
        color: 'Фиолетовый',
        pattern: 'без принта',
        image: 'https://3.downloader.disk.yandex.ru/preview/b37da48e3a7a82faa8f807a0b80da7fa4562d4ac1bfb2051c1c0c72be3fbf654/inf/JFcueX3iemLVvbkStB_q1LMxSKc1349kUXGDMEfYztbmUEh3XoxXvkKHxSqsqRfyK2gpGP-FZGioxkCdtAnNbA%3D%3D',
      },
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
