const mongoose = require("mongoose");
const demoRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  serviceType: { type: String, required: true },
  businessType: { type: String, required: true },
  message: { type: String, required: true },
});

const DemoRequest = mongoose.model("DemoRequest", demoRequestSchema);
module.exports = DemoRequest;
