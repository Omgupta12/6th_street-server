const mongoose = require("mongoose");

const dbConnect = async () => {
  const uri = process.env.MONGODB_URL;
  try {
    await mongoose.connect(uri);
    console.log("database connected");
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = dbConnect;
