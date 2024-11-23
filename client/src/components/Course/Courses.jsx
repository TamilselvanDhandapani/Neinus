// Courses.js
import React, { useState } from 'react';
import courses from './Course'; 
import { Link } from 'react-router-dom';
import "./Courses.css"
import { TbStars } from "react-icons/tb";
import Footer from '../Footer/Footer';

const Courses = () => {
  

  return (
    <div>
      <div className="course-list-container">
      <h2 className="course-list-title">Software Trainning Courses</h2>
      <div className="course-list">
        {courses.map(({id ,courestitle,icon: Icon,rating,duration,image}) => (
          <div className="course-item" key={id}>
          <img src={image} alt="Course_Img" className='course-image' />
            <Link to={`/coursedetail/${id}`}><h1 className='course-name'>{courestitle}</h1></Link>
            <p className="course-duration"><Icon/>Duration: {duration}</p>
            <p className="course-rating"><TbStars/>Rating: {rating}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Courses;
