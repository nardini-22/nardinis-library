const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:3333");
mongoose.Promise = global.Promise;

module.exports = mongoose;
