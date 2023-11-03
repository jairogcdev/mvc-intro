const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/my-first-database";
const connection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("conectados a la BD correctamente");
  } catch (err) {
    console.log(err);
  }
};
connection();
