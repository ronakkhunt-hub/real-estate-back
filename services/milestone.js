const milestoneModel = require("../models/milestone");

const createMilestone = (query) => {
  return milestoneModel.create(query);
};

const getMilestones = (query) => {
  return milestoneModel.find(query);
};

const findPopulatedMilestones = (pipeline) => {
  return milestoneModel.aggregate(pipeline);
};

const getMilestone = (query) => {
  return milestoneModel.findOne(query);
};

const updateMilestone = (query, payload) => {
  return milestoneModel.findOneAndUpdate(query, payload);
};

const updateMilestoneById = (id, payload) => {
  return milestoneModel.findByIdAndUpdate(id, payload);
};

const deleteMilestone = (query) => {
  return milestoneModel.findOneAndDelete(query);
};

const deleteMilestoneById = (id) => {
  return milestoneModel.findByIdAndDelete(id);
};

module.exports.createMilestone = createMilestone;
module.exports.getMilestones = getMilestones;
module.exports.findPopulatedMilestones = findPopulatedMilestones;
module.exports.getMilestone = getMilestone;
module.exports.updateMilestone = updateMilestone;
module.exports.updateMilestoneById = updateMilestoneById;
module.exports.deleteMilestone = deleteMilestone;
module.exports.deleteMilestoneById = deleteMilestoneById;
