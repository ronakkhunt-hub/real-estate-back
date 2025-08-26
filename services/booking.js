const bookingModel = require("../models/booking");

const createBooking = (query) => {
  return bookingModel.create(query);
};

const getBookings = (query) => {
  return bookingModel.find(query);
};

const findPopulatedBookings = (pipeline) => {
  return bookingModel.aggregate(pipeline);
};

const getBooking = (query) => {
  return bookingModel.findOne(query);
};

const updateBooking = (query, payload) => {
  return bookingModel.findOneAndUpdate(query, payload);
};

const updateBookingById = (id, payload) => {
  return bookingModel.findByIdAndUpdate(id, payload);
};

const deleteBooking = (query) => {
  return bookingModel.findOneAndDelete(query);
};

const deleteBookingById = (id) => {
  return bookingModel.findByIdAndDelete(id);
};

module.exports.createBooking = createBooking;
module.exports.getBookings = getBookings;
module.exports.findPopulatedBookings = findPopulatedBookings;
module.exports.getBooking = getBooking;
module.exports.updateBooking = updateBooking;
module.exports.updateBookingById = updateBookingById;
module.exports.deleteBooking = deleteBooking;
module.exports.deleteBookingById = deleteBookingById;
