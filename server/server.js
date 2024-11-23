const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const EmailSubscription = require("./Model/EmailSchema");
const DemoRequest = require("./Model/DemoSchema");
const Enroll = require("./Model/EnrollSchema");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://dtamilselvan1004:8g1bwRwSB1hb8yCp@neinustech.5friu.mongodb.net/?retryWrites=true&w=majority&appName=NeinusTech"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Connection Error", err));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dtamilselvan1004@gmail.com ", // replace with your Gmail address
    pass: "iwjj yqoz cbpi ebps", // replace with your Gmail app password
  },
});
app.post("/demoRequest", async (req, res) => {
  const { name, email, phone, company, businessType, serviceType, message } =
    req.body;
  const mailOptions = {
    from: email,
    to: "dtamilselvan1004@gmail.com", // recipient (your Gmail address)
    subject: "New Demo Request from " + name,
    html : `  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #4CAF50; text-align: center;">Demo Request Notification</h2>
            <p>Hi Team,</p>
            <p><strong>${name}</strong> from <strong>${company}</strong> has requested a demo for their business.</p>
            <p><strong>Service Type:</strong> ${serviceType}</p>
            <p><strong>Business Type:</strong> ${businessType}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <h3 style="color: #4CAF50;">Contact Information</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <h3 style="color: #4CAF50;">Message</h3>
            <p>${message}</p>
            <br>
            <p style="text-align: center; font-size: 0.9em; color: #888;">This is an automated message. Please do not reply directly to this email.</p>
        </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

// Email Subscription
app.post("/emailSubscription", async (req, res) => {
  const { email, name } = req.body;

  try {
    // Check if the email already exists
    const existingSubscription = await EmailSubscription.findOne({ email });
    if (existingSubscription) {
      return res.status(409).json({ message: "Email already subscribed." });
    }

    // Create a new email subscription document
    const emailSubscription = new EmailSubscription({
      email,
      name,
    });

    // Save the document in MongoDB
    await emailSubscription.save();
    console.log("Email subscription has been saved.");

    // Respond with a success message
    res
      .status(201)
      .json({ message: "Subscription saved successfully", emailSubscription });
  } catch (err) {
    console.error("Error saving subscription:", err);
    res
      .status(500)
      .json({ error: "Failed to save subscription", details: err.message });
  }
});

// Course Enrollment
app.post("/enroll", async (req, res) => {
  const { name, email, course } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !course) {
    return res
      .status(400)
      .json({ error: "All fields are required: name, email, and course" });
  }

  try {
    const enroll = new Enroll({
      name,
      email,
      course,
    });

    await enroll.save();
    console.log("Enroll Data Is Saved");

    res
      .status(201)
      .json({ message: "Enrollment submitted successfully", enroll });
  } catch (err) {
    console.error("Error saving enrollment request:", err);
    res
      .status(500)
      .json({
        error: "Failed to submit enrollment data",
        details: err.message,
      });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
