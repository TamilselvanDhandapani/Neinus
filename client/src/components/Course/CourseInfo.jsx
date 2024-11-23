import React from 'react'
import "./CourseInfo.css"
import { Link } from 'react-router-dom'

const CourseInfo = () => {
  return (
    <div className="mission-container">
    <h1>Upgrade Your Skills, Unlock Your Career </h1>
    <div className="mission-text">
      <p>
        Empowering Students With Right Skills & Knowledge To Succeed In Their
        Career Paths.
      </p>
    </div>

    <div className="steps-container">
      <div className="step">
        <img
          src="https://images.pexels.com/photos/12657545/pexels-photo-12657545.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Choose program"
          className="step-image"
        />
        <p>Choose Program</p>
      </div>
      <div className="step">
        <img
          src="https://images.pexels.com/photos/6084284/pexels-photo-6084284.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Learn from us"
          className="step-image"
        />
        <p>Learn With Us</p>
      </div>
      <div className="step">
        <img
          src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Get certified"
          className="step-image"
        />
        <p>Get Certified</p>
      </div>
      <div className="step">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Get hired"
          className="step-image"
        />
        <p>Get Hired</p>
      </div>
    </div>
    <div> <button className='c-button'> <Link to="/courses"> Explore Courses</Link></button>  </div>
  </div>
  )
}

export default CourseInfo