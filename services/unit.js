const unitModel = require("../models/building");

const createUnit = (query) => {
  return unitModel.create(query);
};

const getUnits = (query) => {
  return unitModel.find(query);
};

const findPopulatedUnits = (pipeline) => {
  return unitModel.aggregate(pipeline);
};

const getUnit = (query) => {
  return unitModel.findOne(query);
};

const updateUnit = (query, payload) => {
  return unitModel.findOneAndUpdate(query, payload);
};

const updateUnitById = (id, payload) => {
  return unitModel.findByIdAndUpdate(id, payload);
};

const deleteUnit = (query) => {
  return unitModel.findOneAndDelete(query);
};

const deleteUnitById = (id) => {
  return unitModel.findByIdAndDelete(id);
};

module.exports.createUnit = createUnit;
module.exports.getUnits = getUnits;
module.exports.findPopulatedUnits = findPopulatedUnits;
module.exports.getUnit = getUnit;
module.exports.updateUnit = updateUnit;
module.exports.updateUnitById = updateUnitById;
module.exports.deleteUnit = deleteUnit;
module.exports.deleteUnitById = deleteUnitById;
