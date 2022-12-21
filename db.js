const mongoose = require("mongoose");
const { MONGODB_URI: url } = require("./utils/config");
// let url =
//   "mongodb://localhost:27017/iSpaceData?readPreference=primary&ssl=false";
const connectToDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};

module.exports = connectToDB;
