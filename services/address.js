const addressModel = require("../models/address");

const createAddress = (query) => {
  return addressModel.create(query);
};

const getAddresses = (query) => {
  return addressModel.find(query);
};

const findPopulatedAddresses = (pipeline) => {
  return addressModel.aggregate(pipeline);
};

const getAddress = (query) => {
  return addressModel.findOne(query);
};

const updateAddress = (query, payload) => {
  return addressModel.findOneAndUpdate(query, payload);
};

const updateAddressById = (id, payload) => {
  return addressModel.findByIdAndUpdate(id, payload);
};

const deleteAddress = (query) => {
  return addressModel.findOneAndDelete(query);
};

const deleteAddressById = (id) => {
  return addressModel.findByIdAndDelete(id);
};

module.exports.createAddress = createAddress;
module.exports.getAddresses = getAddresses;
module.exports.findPopulatedAddresses = findPopulatedAddresses;
module.exports.getAddress = getAddress;
module.exports.updateAddress = updateAddress;
module.exports.updateAddressById = updateAddressById;
module.exports.deleteAddress = deleteAddress;
module.exports.deleteAddressById = deleteAddressById;
