const express = require("express");
const bookingController = require("../controllers/booking");
const router = express.Router();

router.post("/insert", bookingController.insertUser);
router.get("/getAll", bookingController.getAllUsers);
router.delete("/getAll/:id", bookingController.deleteUser);

module.exports = router;
