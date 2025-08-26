const { Schema, model, Types } = require("mongoose");

const buildingSchema = new Schema(
  {
    propertyId: { type: Types.ObjectId, ref: "property" },
    name: { type: String },
    floors: { type: Number },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const buildingModel = model("building", buildingSchema);
module.exports = buildingModel;
