const { connect } = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB;

const options = {
  connectTimeoutMS: 20000,
  socketTimeoutMS: 45000,
  serverSelectionTimeoutMS: 30000,
  authSource: "admin",
};

const connectDB = async (retries = 5, delay = 5000) => {
  try {
    await connect(uri, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    if (
      error.name === "MongoNetworkError" ||
      error?.name === "MongoServerSelectionError" ||
      error?.name === "MongoNetworkTimeoutError"
    ) {
      console.error(
        error?.message,
        " Network error: Could not connect to MongoDB. Please check your internet connection."
      );
    }
    console.error("Error connecting to MongoDB", error);
    if (retries === 0) {
      console.error("Retries exhausted. Handling the error without exiting.");
      return;
    } else {
      console.error(`Retrying connection in ${delay / 1000} seconds...`);
      setTimeout(() => connectDB(retries - 1, delay), delay);
    }
  }
};

module.exports = connectDB;
