const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
});

// Create Models

const Enroll = mongoose.model("Enroll", enrollSchema);

module.exports = Enroll;
