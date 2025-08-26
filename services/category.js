const categoryModel = require("../models/category");

const createCategory = (query) => {
  return categoryModel.create(query);
};

const getCategories = (query) => {
  return categoryModel.find(query);
};

const getCategory = (query) => {
  return categoryModel.findOne(query);
};

const updateCategory = (query, payload) => {
  return categoryModel.findOneAndUpdate(query, payload);
};

const updateCategoryById = (id, payload) => {
  return categoryModel.findByIdAndUpdate(id, payload);
};

const deleteCategory = (query) => {
  return categoryModel.findOneAndDelete(query);
};

const deleteCategoryById = (id) => {
  return categoryModel.findByIdAndDelete(id);
};

module.exports.createCategory = createCategory;
module.exports.getCategories = getCategories;
module.exports.getCategory = getCategory;
module.exports.updateCategory = updateCategory;
module.exports.updateCategoryById = updateCategoryById;
module.exports.deleteCategory = deleteCategory;
module.exports.deleteCategoryById = deleteCategoryById;
