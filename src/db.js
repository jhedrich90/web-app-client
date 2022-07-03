const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("DB conectada exitosamente a ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
