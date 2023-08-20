const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const sequelize2 = require("./util/dataBase");

var cors = require("cors");
const app = express();

app.use(cors()); //(cross origin resource sharing) is primarily a security feature. It prevents malicious websites from making unauthorized requests to your server from a user's browser. Without CORS, any website could potentially make requests to your server and access sensitive data.

app.set("view engine", "ejs");
app.set("views", "views");

const bookingRoutes = require("./routes/booking");

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", bookingRoutes);

sequelize2
  .sync()
  .then((res) => {
    console.log(res);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
