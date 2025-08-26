const { Schema, model, Types } = require("mongoose");

const addressSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "user" },
    line1: { type: String },
    line2: { type: String },
    country: { type: String },
    state: { type: String },
    pincode: { type: String },
    isDefault: { type: Boolean },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const addressModel = model("address", addressSchema);
module.exports = addressModel;
