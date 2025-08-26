const { Schema, model } = require("mongoose");

const refundSchema = new Schema(
  {
    paymentId: { type: Types.ObjectId, ref: "payment" },
    bookingId: { type: Types.ObjectId, ref: "booking" },
    userId: { type: Types.ObjectId, ref: "user" },
    amount: { type: Number },
    reason: { type: String },
    status: {
      type: String,
      enum: ["requested", "approved", "processed", "rejected"],
    },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const refundModel = model("refund", refundSchema);
module.exports = refundModel;
