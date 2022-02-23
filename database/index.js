const mongoose = require("mongoose");
require("dotenv").config();

const url = "mongodb://localhost/nardinis-library";

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || url);

module.exports = mongoose;
