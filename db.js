const { Sequelize } = require('sequelize');

const databaseConfig = {
  name: 'p17',
  user: 'sandro',
  password: 'sandro'
};

const db = new Sequelize(
  databaseConfig.name,
  databaseConfig.user,
  databaseConfig.password,
  { dialect: 'postgres' }
);

// async function test() {
//   try {
//     await db.authenticate();
//     console.log("Pouet trololol ca marche :)");
//   } catch (error) {
//     console.log('Unable to connect to DB: ', error);
//   }
// }
// test();

module.exports = db;
