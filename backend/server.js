const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./dbConnect/db");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: `${process.env.ORIGIN}`,
    credentials: true,
  }),
);

db();

app.use("/api/", userRoutes);
app.use("/api/", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on Port:4000");
});
