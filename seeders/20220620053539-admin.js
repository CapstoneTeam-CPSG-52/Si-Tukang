'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin SiTukang",
          email: "admin@gmail.com",
          password: "admin123",
          address: "Tangerang",
          phone: "081234567890",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
