const { Schema, model } = require("mongoose");

const mediaSchema = new Schema(
  {
    propertyId: { type: Types.ObjectId, ref: "property" },
    type: { type: String, enum: ["banner", "video", "brochure", "floorplan"] },
    url: { type: String },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const categoryModel = model("category", mediaSchema);
module.exports = categoryModel;
