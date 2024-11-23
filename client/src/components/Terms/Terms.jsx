import React from 'react';
import './Terms.css';

const TermsAndConditions = () => {
  return (
    <div className="term-container">
      <h1 className="heading">Terms and Conditions</h1>
      <div className="section">
        <p>Welcome to Neinus Technologies! These terms and conditions outline the rules and regulations for the use of our website.</p>
        <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Neinus Technologies if you do not agree to all the terms and conditions stated on this page.</p>
      </div>

      <div className="section">
        <h2 className="subheading">Intellectual Property Rights</h2>
        <p>Unless otherwise stated, Neinus Technologies and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from Neinus Technologies for your personal use, subjected to restrictions set in these terms and conditions.</p>
        <ul className="list">
          <li className="listItem">Republish material from Neinus Technologies</li>
          <li className="listItem">Sell, rent, or sub-license material from Neinus Technologies</li>
          <li className="listItem">Reproduce, duplicate or copy material from Neinus Technologies</li>
          <li className="listItem">Redistribute content from Neinus Technologies</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="subheading">User Responsibilities</h2>
        <p>As a user of this website, you agree to provide accurate and complete information when prompted by any forms on this website, and use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use of the website.</p>
      </div>

      <div className="section">
        <h2 className="subheading">Limitation of Liability</h2>
        <p>Neinus Technologies shall not be held responsible or liable for any damages or issues that may arise from your use of this website. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.</p>
      </div>

      <div className="section">
        <h2 className="subheading">Links to Other Websites</h2>
        <p>Our website may contain links to third-party websites or services that are not owned or controlled by Neinus Technologies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
      </div>

      <div className="section">
        <h2 className="subheading">Modifications</h2>
        <p>Neinus Technologies reserves the right to revise these terms and conditions at any time as it sees fit. By using this website, you are expected to review these terms on a regular basis.</p>
      </div>

      <div className="section">
        <h2 className="subheading">Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Erode.</p>
      </div>
    </div>
  );
}

export default TermsAndConditions;