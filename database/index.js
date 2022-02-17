const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

module.exports = mongoose;
