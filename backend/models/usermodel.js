const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Coffee" }],
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
