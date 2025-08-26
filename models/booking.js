const { Schema, model, Types } = require("mongoose");

const bookingSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "user" },
    developerId: { type: Types.ObjectId, ref: "developer" },
    propertyId: { type: Types.ObjectId, ref: "property" },
    unitId: { type: Types.ObjectId, ref: "unit" },
    status: {
      type: String,
      enum: [
        "initiated",
        "pending_payment",
        "active",
        "completed",
        "cancelled",
      ],
    },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const bookingModel = model("booking", bookingSchema);
module.exports = bookingModel;
