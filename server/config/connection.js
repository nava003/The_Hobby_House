const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');

// MONGODB_URI - When connecting to MongoDB, search for the env variable value.
// OR, search for the env file's value to connect.
// Otherwise, connect to the local MongoDB Compass
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;