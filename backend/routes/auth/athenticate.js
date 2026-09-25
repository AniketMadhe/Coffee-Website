const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (e) {
    throw new Error("Error hashing password");
  }
};

module.exports = { hashPassword };
