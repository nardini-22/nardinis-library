const express = require("express");
const router = express.Router();

const Books = require("../models/books");

router.get("/livros", (req, res, next) => {
  Books.find({})
    .then((books) => {
      res.send(books);
    })
    .catch(next);
});

router.get("/livros/:_id", (req, res, next) => {
  Books.findOne({ _id: req.params._id })
    .then((books) => {
      res.send(books);
    })
    .catch(next);
});

router.post("/livros", (req, res, next) => {
  Books.create(req.body)
    .then((books) => {
      res.send(books);
    })
    .catch((err) => console.log(err));
});

router.put("/livros/:_id", (req, res, next) => {
  Books.findOneAndUpdate({ _id: req.params._id }, req.body).then(() => {
    Books.findOne({ _id: req.params._id }).then((books) => {
      res.send(books);
    });
  });
});

router.delete("/livros/:_id", (req, res, next) => {
  Books.findOneAndDelete({ _id: req.params._id }).then((books) => {
    res.send(books);
  });
});

module.exports = router;
