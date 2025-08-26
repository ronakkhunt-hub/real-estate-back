const { Schema, model } = require("mongoose");

const payoutSchema = new Schema(
  {
    developerId: { type: Types.ObjectId, ref: "developer" },
    type: { type: String, enum: ["requested", "approved", "paid", "rejected"] },
    title: { type: String },
    fromDate: { type: Number },
    toDate: { type: Number },
    grossCollected: { type: Number },
    platformFee: { type: Number },
    gatewayFee: { type: Number },
    netAmount: { type: Number },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const payoutModel = model("payout", payoutSchema);
module.exports = payoutModel;
