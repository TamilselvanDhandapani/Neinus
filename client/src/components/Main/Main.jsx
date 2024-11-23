import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <h1>Welcome To Neinus Technologies</h1>

          <h5 className="hero-subtitle">
            "Our mission is to empower clients to reach their objectives & <br/>
            accelerate business growth by utilizing cutting-edge technologies
            & <br/> industry-leading best practices."
          </h5>

          <Link to="/DemoForm">
            <button className="cta-button">Contact Us</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Main;
