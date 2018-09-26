const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/new", userController.new);
router.post("/", userController.create);

router.get("/login", (req, res) => {
  res.render("app/login");
});

router.post("/login", (req, res) => {
  var loginStrategy = passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  });
  return loginStrategy(req, res);
});

router.get("/:id", userController.show);

module.exports = router;
