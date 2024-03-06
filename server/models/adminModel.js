const mongoose = require("mongoose");

const adminModel = mongoose.model("admin", {
  type: String,
  username: String,
  password: String,
  status: String,
  date: {
    type: String,
    default: new Date(), // Set the default value to the current date and time
  },
});

module.exports = adminModel;
