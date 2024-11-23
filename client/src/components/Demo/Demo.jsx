import React, { useState } from "react";
import "./Demo.css";
import axios from "axios";
import Dimage from "/demo.png";
import Footer from "../Footer/Footer";

const DemoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const demoData = await axios.post("http://localhost:5000/demoRequest", {
        name,
        email,
        phone,
        company,
        businessType,
        serviceType,
        message,
      });
      console.log(demoData.data);
     
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Please try again.");
      } else {
        setErrorMessage("An error occurred.");
      }
    }

    setBusinessType("");
    setServiceType("");
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setCompany("");

    setErrorMessage("");
  };

  return (
    < >
     <div className="demo-form-container">
     <div className="form-message ">
        <h1>Bring Your Ideas Into Business</h1>
        <p>
          Transform your innovative concepts into a thriving business venture.
          By capitalizing on your distinctive creativity and insights, you can
          create solutions that satisfy market demands, attract customers, and
          stimulate growth.
        </p>
      </div>
      <div className="demo ">
        <div className="demoimg">
          <img src={Dimage} alt="Business-Image" />
        </div>
        <div className="form-container fade-in">
          <h1>Contact Us</h1>
          

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <form className="form-grid" onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                className="dinput"
                type="text"
                name="firstName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                className="dinput"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Phone</label>
              <input
                className="dinput"
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Company Name</label>
              <input
                className="dinput"
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <label>Business Type</label>
              <input
                className="dinput"
                type="text"
                name="businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              />
            </div>

            <div>
              <label>Service Type</label>
              <input
                className="dinput"
                type="text"
                name="serviceType"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              />
            </div>

            <div>
              <label>Message</label>
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
     </div>
      <Footer />
    </>
  );
};

export default DemoForm;
