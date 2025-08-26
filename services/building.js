const buildingModel = require("../models/building");

const createBuilding = (query) => {
  return buildingModel.create(query);
};

const getBuildings = (query) => {
  return buildingModel.find(query);
};

const findPopulatedBuildings = (pipeline) => {
  return buildingModel.aggregate(pipeline);
};

const getBuilding = (query) => {
  return buildingModel.findOne(query);
};

const updateBuilding = (query, payload) => {
  return buildingModel.findOneAndUpdate(query, payload);
};

const updateBuildingById = (id, payload) => {
  return buildingModel.findByIdAndUpdate(id, payload);
};

const deleteBuilding = (query) => {
  return buildingModel.findOneAndDelete(query);
};

const deleteBuildingById = (id) => {
  return buildingModel.findByIdAndDelete(id);
};

module.exports.createBuilding = createBuilding;
module.exports.getBuildings = getBuildings;
module.exports.findPopulatedBuildings = findPopulatedBuildings;
module.exports.getBuilding = getBuilding;
module.exports.updateBuilding = updateBuilding;
module.exports.updateBuildingById = updateBuildingById;
module.exports.deleteBuilding = deleteBuilding;
module.exports.deleteBuildingById = deleteBuildingById;
