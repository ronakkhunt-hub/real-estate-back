const bookingMilestoneModel = require("../models/bookingMilestone");

const createBookingMilestone = (query) => {
  return bookingMilestoneModel.create(query);
};

const getBookingMilestones = (query) => {
  return bookingMilestoneModel.find(query);
};

const findPopulatedBookingMilestones = (pipeline) => {
  return bookingMilestoneModel.aggregate(pipeline);
};

const getBookingMilestone = (query) => {
  return bookingMilestoneModel.findOne(query);
};

const updateBookingMilestone = (query, payload) => {
  return bookingMilestoneModel.findOneAndUpdate(query, payload);
};

const updateBookingMilestoneById = (id, payload) => {
  return bookingMilestoneModel.findByIdAndUpdate(id, payload);
};

const deleteBookingMilestone = (query) => {
  return bookingMilestoneModel.findOneAndDelete(query);
};

const deleteBookingMilestoneById = (id) => {
  return bookingMilestoneModel.findByIdAndDelete(id);
};

module.exports.createBookingMilestone = createBookingMilestone;
module.exports.getBookingMilestones = getBookingMilestones;
module.exports.findPopulatedBookingMilestones = findPopulatedBookingMilestones;
module.exports.getBookingMilestone = getBookingMilestone;
module.exports.updateBookingMilestone = updateBookingMilestone;
module.exports.updateBookingMilestoneById = updateBookingMilestoneById;
module.exports.deleteBookingMilestone = deleteBookingMilestone;
module.exports.deleteBookingMilestoneById = deleteBookingMilestoneById;
