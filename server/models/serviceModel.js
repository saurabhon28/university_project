const mongoose = require("mongoose");

module.exports = mongoose.model("Services", {
  title: String,
  description: String,
  imageURL: String,
});
