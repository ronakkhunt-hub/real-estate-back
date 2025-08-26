const { Schema, model } = require("mongoose");

const mediaSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "user" },
    propertyId: { type: Types.ObjectId, ref: "property" },
    developerId: { type: Types.ObjectId, ref: "developer" },
    message: { type: String },
    status: { type: String, enum: ["open", "assigned", "closed"] },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const categoryModel = model("category", mediaSchema);
module.exports = categoryModel;
