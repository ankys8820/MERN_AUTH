const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MURI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.log(e);
  });

