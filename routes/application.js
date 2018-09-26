const express = require("express");
const router = express.Router();
const applicationController = require("../controller/application");
const passport = require("passport");

router.get("/", applicationController.index);
router.get("/login", (req, res) => {
  res.render("app/login");
});

router.post("/user/login", (req, res) => {
  var loginStrategy = passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "user/login",
    failureFlash: true
  });
  return loginStrategy(req, res);
});

module.exports = router;
