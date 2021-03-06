const express = require("express");
const router = express.Router();

const Users = require("../models/user");

router.get("/usuarios", (req, res, next) => {
  Users.find({})
    .then((users) => {
      res.send(users);
    })
    .catch(next);
});

router.get("/usuarios/:_id", (req, res, next) => {
  Users.findOne({ _id: req.params._id })
    .then((users) => {
      res.send(users);
    })
    .catch(next);
});

router.get("/login/:password/:username", (req, res, next) => {
  Users.findOne({
    password: req.params.password,
    username: req.params.username,
  })
    .then((users) => {
      res.send(users);
    })
    .catch(next);
});

router.post("/usuarios", (req, res, next) => {
  Users.create(req.body)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => console.log(err));
});

router.put("/usuarios/:_id", (req, res, next) => {
  Users.findOneAndUpdate({ _id: req.params._id }, req.body).then(() => {
    Users.findOne({ _id: req.params._id }).then((users) => {
      res.send(users);
    });
  });
});

router.delete("/usuarios/:_id", (req, res, next) => {
  Users.findOneAndDelete({ _id: req.params._id }).then((users) => {
    res.send(users);
  });
});

module.exports = router;
