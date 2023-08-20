const Sequelize = require("sequelize"); // give class or constructor function


const sequelize2 = new Sequelize("booking-appintment", "root", "Nafees@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize2;
