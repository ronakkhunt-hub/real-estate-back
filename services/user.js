const userModel = require("../models/user");

const createUser = (payload) => {
  return userModel.create(payload);
};

const findUser = (query) => {
  return userModel.findOne(query);
};

const findUsers = (query) => {
  return userModel.find(query);
};

const findPopulatedUsers = (pipeline) => {
  return userModel.aggregate(pipeline);
};

const updateUser = (query, payload) => {
  return userModel.findOneAndUpdate(query, payload);
};

const updateManyUsers = (query, payload) => {
  return userModel.updateMany(query, payload);
};

const deleteUser = (query, payload) => {
  return userModel.findOneAndDelete(query, payload);
};

const deleteManyUsers = (query) => {
  return userModel.deleteMany(query);
};

module.exports.createUser = createUser;
module.exports.findUser = findUser;
module.exports.findUsers = findUsers;
module.exports.findPopulatedUsers = findPopulatedUsers;
module.exports.updateUser = updateUser;
module.exports.updateManyUsers = updateManyUsers;
module.exports.deleteUser = deleteUser;
module.exports.deleteManyUsers = deleteManyUsers;
