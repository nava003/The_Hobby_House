const mongoose = require('mongoose');

// MONGODB_URI - When connecting to MongoDB, search for the env variable value.
// OR, search for the env file's value to connect.
// Otherwise, connect to the local MongoDB Compass
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hobby-house');


module.exports = mongoose.connection;