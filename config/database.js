const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Ka Connection Sucessfull"))
    .catch((error) => {
      console.log("Connection problem");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
