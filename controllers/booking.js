const Appointment = require("../models/appointment");


exports.insertUser = async (req, res, next) => {
  try {
    if (!req.body.number && req.body.email) {
      throw new Error("phone no & email is mandatory");
    }
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;

    const data = await Appointment.create({
      name: name,
      number: number,
      email: email,
    });
    res.status(201).json({ newUserDetail: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Appointment.findAll();
    res.status(200).json({ allUser: users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.deleteUser = async (req, res, next) => {
  const prodId = req.params.id;

  try {
    await Appointment.destroy({
      where: {
        id: prodId,
      },
    });
    res.status(204).json({ msg: `this id=${prodId} is deleted` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
