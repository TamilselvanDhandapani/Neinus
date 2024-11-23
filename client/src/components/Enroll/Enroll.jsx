import React, { useState } from "react";
import "./Enroll.css";
import axios from "axios";

const Enroll = ({ closePopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const handleEnroll = async (e) => {
    e.preventDefault();
    

    closePopup();
    try {
      const enrollData = await axios.post("http://localhost:5000/enroll", {
        name,
        email,
        phone,
        course,
      });
      console.log(enrollData.data)

    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={closePopup}>
          &times;
        </button>
        <h1 className="enroll-title">Course Enroll</h1>
        <form className="enroll-form" onSubmit={handleEnroll}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              className="form-input"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">E-Mail</label>
            <input
              type="email"
              value={email}
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              value={phone}
              className="form-input"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Select Course</label>
            <select
              value={course}
              className="form-input"
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a course
              </option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Full-Stack Web Developement">
                Full-Stack Web Developemt
              </option>
            </select>
          </div>
          <button type="submit" className="enroll-button">
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
