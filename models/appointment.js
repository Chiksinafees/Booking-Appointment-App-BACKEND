const Sequalize = require("sequelize");
const sequelize2 = require("../util/dataBase");


const Appointment = sequelize2.define("user", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequalize.STRING,
  number: {
    type: Sequalize.STRING,
    unique: true,
  },
  email: {
    type: Sequalize.STRING,
    unique: true,
  },
});

module.exports = Appointment;
