const mongoose = require("../database");

const UsersSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  access_level: {
      type: String,
      required: true
  }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
