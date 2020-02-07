module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE TABLE apprenants(
      id UUID NOT NULL PRIMARY KEY,
      first_name VARCHAR(20),
      last_name VARCHAR(30),
      created_at DATE NOT NULL,
      updated_at DATE NOT NULL
    )`);
    // return queryInterface.createTable('Apprenants', {
    //   id: {
    //     allowNull: false,
    //     primaryKey: true,
    //     type: Sequelize.UUID
    //   },
    //   first_name: {
    //     type: Sequelize.STRING
    //   },
    //   last_name: {
    //     type: Sequelize.STRING
    //   },
    //   created_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updated_at: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP TABLE apprenants`);
    // return queryInterface.dropTable('Apprenants');
  }
};
