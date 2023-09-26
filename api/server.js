const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require("dotenv").config();
require("./db");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
