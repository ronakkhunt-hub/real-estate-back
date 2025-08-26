const { Schema, model, Types } = require("mongoose");

const developerSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    accountNo: { type: String },
    ifsc: { type: String },
    upi: { type: String },
    commissionRate: { type: String },
    userId: { type: Types.ObjectId, ref: "user" },
    addressId: { type: Types.ObjectId, ref: "address" },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const developerModel = model("developer", developerSchema);
module.exports = developerModel;
