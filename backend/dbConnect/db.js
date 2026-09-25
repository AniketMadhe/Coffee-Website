const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDb;
