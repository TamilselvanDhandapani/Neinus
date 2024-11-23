import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import links from "./Links";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleFooter = async (e) => {
    e.preventDefault();
    try {
      const emailData = await axios.post(
        "http://localhost:5000/emailSubscription",
        { email, name }
      );
      console.log(emailData.data)
     
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("Email Already Exits.");
      } else {
        setErrorMessage("An error occurred.");
      }
    }

    console.log(email, name);
    //Reset The Fileds
    setEmail("");
    setName("");
  };
  return (
    <div className="footer-container">
      <div className="footer-one">
        <div className="fone">
          <h2>Neinus Technologies</h2>
          <h4>IT Services & Consulting</h4>

          <Link to="/Policy">Privacy Policy</Link>
          <span> | </span>
          <Link to="/Terms">Terms & Conditions</Link>
        </div>
        <div className="fthree">
          <h3>Links</h3>
          <div className="fservices">
            <p>
              <Link to="/Courses">Courses</Link>
            </p>
            <p>
              <Link to="/About">About</Link>
            </p>
            <p>
              <Link to="/Services">Service</Link>
            </p>
            
           
          </div>
        </div>

        <div className="ftwo">
          <h3>Contact Us</h3>
          <p className="email-link">
            <IoMdMail className="ficon" />{" "}
            <a href="mailto:contactus@neinus.com">contactus@neinus.com</a>
          </p>
          <p className="email-link">
            <IoMdMail className="ficon" />{" "}
            <a href="mailto:neinustech@gmail.com">careers@neinus.com</a>
          </p>
          <div className="address-link">
            <IoLocation className="ficon" />{" "}
            <a href="">
              {" "}
              No 139/1A,Kamadhenu Nagar, <br />
              Opposite To BIT College, <br />
              Sathyamangalam, Erode - 638 402
            </a>
          </div>
        </div>

        <div className="ffour">
          <h3> Let's Get Connected</h3>
          <p>Join For Latest Trends & Updates</p>
          <form onSubmit={handleFooter}>
            <div>
              <input
                className="finput"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="finput"
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p style={{ color: "white" ,textAlign:"center"}}>{errorMessage}</p>}
            <button className="fbutton" type="submit">
              Subscribe{" "}
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-two">
        <div className="social-links">
          <ul className="social-icons">
            {links.map(({ id, logo: Icon, link }) => (
              <li key={id} className="social-icon-item">
                <a href={link} aria-label={`Follow us on ${id}`}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="copy">
          <p>©️ 2024 Neinus Technologies | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
