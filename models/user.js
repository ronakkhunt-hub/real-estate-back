const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    role: { type: String, enum: ["buyer", "admin", "developer"] },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const userModel = model("user", userSchema);
module.exports = userModel;
