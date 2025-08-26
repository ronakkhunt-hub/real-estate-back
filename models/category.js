const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const categoryModel = model("category", categorySchema);
module.exports = categoryModel;
