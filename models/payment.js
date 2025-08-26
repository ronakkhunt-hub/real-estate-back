const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
  {
    bookingId: { type: Types.ObjectId, ref: "booking" },
    userId: { type: Types.ObjectId, ref: "user" },
    developerId: { type: Types.ObjectId, ref: "developer" },
    milestoneId: { type: Types.ObjectId, ref: "milestone" },
    gateway: { type: String, enum: ["razorpay", "stripe", "offline"] },
    method: { type: Number },
    amount: { type: Number },
    platformFee: { type: Number },
    gatewayFee: { type: Number },
    netToDeveloper: { type: Number },
    status: {
      type: String,
      enum: [
        "created",
        "authorized",
        "captured",
        "failed",
        "refunded",
        "chargeback",
      ],
    },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const paymentModel = model("payment", paymentSchema);
module.exports = paymentModel;
