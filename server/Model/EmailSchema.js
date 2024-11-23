const mongoose = require("mongoose");

const emailSubscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true,  },
  name: { type: String, required: true }
});

const EmailSubscription = mongoose.model(
  "EmailSubscription", emailSubscriptionSchema
);
module.exports = EmailSubscription;
