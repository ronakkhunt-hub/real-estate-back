const { Schema, model, Types } = require("mongoose");

const unitSchema = new Schema(
  {
    propertyId: { type: Types.ObjectId, ref: "property" },
    buildingId: { type: Types.ObjectId, ref: "building" },
    unitNo: { type: Number },
    floor: { type: Number },
    type: { type: String },
    areaSqft: { type: Number },
    price: { type: Number },
    status: {
      type: String,
      enum: ["available", "held", "booked", "sold", "cancelled"],
    },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const unitModel = model("unit", unitSchema);
module.exports = unitModel;
