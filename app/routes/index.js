const express = require("express");
const { generateGreeting } = require("../lib/returnHello");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  console.dir(req.query);
  let language = req.query?.language;
  if (!language) {
    language = "english";
  }
  res.render("pages/index", {
    title: "Week 16 Lab Website",
    greeting: generateGreeting(language),
    message: "Message of the day",
  });
});

module.exports = router;
