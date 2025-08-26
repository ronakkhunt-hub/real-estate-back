const { Schema, model, Types } = require("mongoose");

const bookingMilestoneSchema = new Schema(
  {
    bookingId: { type: Types.ObjectId, ref: "booking" },
    stepId: { type: Types.ObjectId, ref: "step" },
    dueAmount: { type: Number },
    status: {
      type: String,
      enum: ["pending", "paid", "partially_paid", "skipped"],
    },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const bookingMilestoneModel = model("bookingMilestone", bookingMilestoneSchema);
module.exports = bookingMilestoneModel;
