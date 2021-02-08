const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", (req, res, next) => {
 
    
});

module.exports = router;

// router.get("/", (req, res, next) => {
//   User.findAll().then((users) => {
//     res.send(users);
//   });
// });

// User.create({
//   name: "jesu",
//   email: "jesu@jes.com",
// }).then(() => {
//   res.send("usuario creado");
// });
