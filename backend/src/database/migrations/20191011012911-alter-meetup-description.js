module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('meetups', 'description', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('meetups', 'description', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
