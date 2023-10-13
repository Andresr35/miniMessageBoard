var express = require("express");
var router = express.Router();
const Message = require("../models/message");

// Sample Messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", async function (req, res, next) {
  // console.log(await Message.countDocuments({}).exec());
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", async function (req, res, next) {
  const newMessage = new Message({
    text: req.body.authorName,
    user: req.body.message,
    added: new Date(),
  });
  await newMessage.save();
  messages.push(newMessage);
  res.redirect("./");
});

module.exports = router;
