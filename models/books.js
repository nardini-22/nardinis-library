const mongoose = require("../database");

const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  access_level: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  reserved: {
    type: Boolean,
    required: true,
  },
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
