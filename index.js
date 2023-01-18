const express = require("express");
const cors = require("cors");
const userRoutes = require("./router/usersRouter");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Đã kết nối với Mongo");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server đang chạy với port ${process.env.PORT}`);
});
