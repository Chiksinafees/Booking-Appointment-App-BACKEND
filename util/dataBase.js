const Sequelize = require("sequelize"); // give class or constructor function

// const sequelize = new Sequelize("sql-learning", "root", "Nafees@123", {
//   dialect: "mysql",
//   host: "localhost",
// });

// created for booking appointment app
const sequelize2 = new Sequelize("booking-appintment", "root", "Nafees@123", {
  dialect: "mysql",
  host: "localhost",
});

// sequelize2.sync()

module.exports = sequelize2;

// module.exports = sequelize;
