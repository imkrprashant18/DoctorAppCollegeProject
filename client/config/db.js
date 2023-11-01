const mongoose = require("mongoose");
const dotenv = require("dotenv");
// dotenv config
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDb Connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Server Issue $(error)`);
  }
};

module.exports = connectDB;
