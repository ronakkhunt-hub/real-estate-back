const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    developerId: { type: Types.ObjectId, ref: "developer" },
    categoryId: { type: Types.ObjectId, ref: "category" },
    title: { type: String },
    description: { type: String },
    city: { type: String },
    address: { type: String },
    basePrice: { type: Number },
    status: {
      type: String,
      enum: ["submitted", "approved", "rejected", "archived"],
    },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const categoryModel = model("category", categorySchema);
module.exports = categoryModel;
