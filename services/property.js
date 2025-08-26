const propertyModel = require("../models/property");

const createProperty = (query) => {
  return propertyModel.create(query);
};

const getPropertyes = (query) => {
  return propertyModel.find(query);
};

const findPopulatedPropertyes = (pipeline) => {
  return propertyModel.aggregate(pipeline);
};

const getProperty = (query) => {
  return propertyModel.findOne(query);
};

const updateProperty = (query, payload) => {
  return propertyModel.findOneAndUpdate(query, payload);
};

const updatePropertyById = (id, payload) => {
  return propertyModel.findByIdAndUpdate(id, payload);
};

const deleteProperty = (query) => {
  return propertyModel.findOneAndDelete(query);
};

const deletePropertyById = (id) => {
  return propertyModel.findByIdAndDelete(id);
};

module.exports.createProperty = createProperty;
module.exports.getPropertyes = getPropertyes;
module.exports.findPopulatedPropertyes = findPopulatedPropertyes;
module.exports.getProperty = getProperty;
module.exports.updateProperty = updateProperty;
module.exports.updatePropertyById = updatePropertyById;
module.exports.deleteProperty = deleteProperty;
module.exports.deletePropertyById = deletePropertyById;
