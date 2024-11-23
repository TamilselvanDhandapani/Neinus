import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "./Course";
import "./CourseDetail.css"; // Ensure the CSS for flip animation is included
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import Footer from "../Footer/Footer";
import Enroll from "../Enroll/Enroll";

const CourseDetail = () => {
  const { id } = useParams();
  const Details = courses.find((item) => item.id === Number(id));

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const openEnrollPopup = () => {
    setIsPopupOpen(true);
  };

  const closeEnrollPopup = () => {
    setIsPopupOpen(false);
  };

  const handleLearnMore = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div className="detail-container">
        <div className="detail-head">
          <h1>{Details.title}</h1>
          <h3>
            Learn to build dynamic and interactive web applications using one{" "}
            <br />
            of the most popular JavaScript libraries in the industry.
          </h3>
          <button className="course-enroll-button" onClick={openEnrollPopup}>
            Enroll Now
          </button>
        </div>

        {/* Flipping Section */}
        <div className="grid-container">
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <h3>Why {Details.cardtitle}?</h3>
          <button className="course-enroll-button" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
        {/* Back Side */}
        <div className="flip-card-back">
          <h4> {Details.cardtitle}</h4>
          <p>
           {Details.carddetail}
          </p>
          <button className="course-enroll-button" onClick={handleLearnMore}>
            Go Back
          </button>
        </div>
      </div>
    </div>

        {/* Additional Course Details */}
        <div className="description">
          <div>
            <h2>Description</h2>
            <p className="para">" {Details.description} "</p>
          </div>
          <div className="output">
            <ul className="outcome">
              {Details.highlights.map((highlight, index) => (
                <li className="outcome-li" key={index}>
                  <FaGraduationCap />
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        </div>


















        <div className="quote">
          <h1>Why Us?</h1>
          <p>
            " Discover The Unique Advantages & Learn Everything Based On
            Projects "
          </p>
        </div>
        <div className="info">
          <div className="info-one">
            <h2>Expert Instructors</h2>
            <p>
              Learn from industry professionals with years of hands-on
              experience in React development.
            </p>
          </div>
          <div className="info-two">
            <div className="info-two-detail">
              <div>
                <ul className="content">
                  {Details.basicTopics.map((basicTopic, index) => (
                    <li className="content-li" key={index}>
                      <div>
                        {" "}
                        <h3>
                          <FaArrowAltCircleRight />
                        </h3>
                      </div>

                      <div>
                        <h4>{basicTopic.title}</h4>
                        <p>{basicTopic.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="info-two">
            <div className="info-two-detail">
              <div>
                <ul className="content">
                  {Details.advancedTopics.map((advancedTopic, index) => (
                    <li className="content-li" key={index}>
                      <div>
                        {" "}
                        <h3>
                          <FaArrowAltCircleRight />
                        </h3>
                      </div>

                      <div>
                        <h4>{advancedTopic.title}</h4>
                        <p>{advancedTopic.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="info-one">
            <h2>Community Support</h2>
            <p>
              Connect with fellow learners, share experiences, and get support
              from instructors and peers.
            </p>
          </div>
        </div>

      </div>

      <Footer />

      {/* Enroll Popup */}
      {isPopupOpen && <Enroll closePopup={closeEnrollPopup} />}
    </div>
  );
};

export default CourseDetail;
