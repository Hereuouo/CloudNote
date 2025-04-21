const mongoose = require('mongoose');// import mongoose to connect to MongoDB
mongoose.set('strictQuery', false);// set strictQuery to false to avoid deprecation warning
const connectDB = async() => {// create a function to connect to MongoDB
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);// connect to MongoDB using the URI from .env file
    console.log(`Database Connected: ${conn.connection.host}`);// log message to console
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;// export the connectDB function to use it in app.js