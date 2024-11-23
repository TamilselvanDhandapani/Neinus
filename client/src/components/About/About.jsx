import React from 'react';
import './About.css';
import Footer from "../Footer/Footer";

const About = () => {
  return (
   <div>
     <div className="about-section">
      <h2 className="about-title">Empowering Businesses Through Innovative Solutions</h2>
      <p className="about-description">
        At Neinus, we are dedicated to providing reliable and efficient IT services to small and medium-sized businesses. Our mission is to empower our clients to achieve their goals and drive business growth by leveraging the latest technologies and best practices.
      </p>
      <div className="about-points">
        <div className="about-point">
          <h3>Customized Solutions</h3>
          <p>We offer comprehensive solutions tailored to meet the unique needs of each client. From custom software development to professional training programs, we ensure our solutions are aligned with your business objectives.</p>
        </div>
        <div className="about-point">
          <h3>Expert Guidance</h3>
          <p>Our team of experienced professionals provides expert guidance to help you navigate the complexities of technology and implement solutions that drive success.</p>
        </div>
        <div className="about-point">
          <h3>Continuous Support</h3>
          <p>We are committed to delivering ongoing support to ensure your systems run smoothly and efficiently, addressing any issues that arise with prompt and effective solutions.</p>
        </div>
        <div className="about-point">
          <h3>Transparent Communication</h3>
          <p>We believe in maintaining transparent communication throughout our partnership, keeping you informed and involved at every stage of the process.</p>
        </div>
      </div>
    

    </div>
    <Footer/>
   </div>
    
  );
}

export default About;
