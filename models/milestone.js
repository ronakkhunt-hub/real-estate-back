const { Schema, model, Types } = require("mongoose");

const milestoneSchema = new Schema(
  {
    name: { type: Number },
    propertyId: { type: Types.ObjectId, ref: "property" },
    code: { type: String },
    label: { type: String },
    amount: { type: Number },
    ordering: { type: Number },
    status: { type: String, enum: ["percentage", "fixed"] },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

const milestoneModel = model("milestone", milestoneSchema);
module.exports = milestoneModel;
