const propertyMediaModel = require("../models/propertyMedia");

const createPropertyMedia = (query) => {
  return propertyMediaModel.create(query);
};

const getProperties = (query) => {
  return propertyMediaModel.find(query);
};

const findPopulatedPropertiesMedia = (pipeline) => {
  return propertyMediaModel.aggregate(pipeline);
};

const getPropertyMedia = (query) => {
  return propertyMediaModel.findOne(query);
};

const updatePropertyMedia = (query, payload) => {
  return propertyMediaModel.findOneAndUpdate(query, payload);
};

const updatePropertyMediaById = (id, payload) => {
  return propertyMediaModel.findByIdAndUpdate(id, payload);
};

const deletePropertyMedia = (query) => {
  return propertyMediaModel.findOneAndDelete(query);
};

const deletePropertyMediaById = (id) => {
  return propertyMediaModel.findByIdAndDelete(id);
};

module.exports.createPropertyMedia = createPropertyMedia;
module.exports.getProperties = getProperties;
module.exports.findPopulatedPropertiesMedia = findPopulatedPropertiesMedia;
module.exports.getPropertyMedia = getPropertyMedia;
module.exports.updatePropertyMedia = updatePropertyMedia;
module.exports.updatePropertyMediaById = updatePropertyMediaById;
module.exports.deletePropertyMedia = deletePropertyMedia;
module.exports.deletePropertyMediaById = deletePropertyMediaById;
