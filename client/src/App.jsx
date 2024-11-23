import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Course/Courses";
import "./index.css";
import About from "./components/About/About";
import DemoForm from "./components/Demo/Demo";
import Career from "./components/Careers/Career";
import TermsAndConditions from "./components/Terms/Terms";
import PrivacyPolicy from "./components/Terms/Policy";
import CousreDetail from "./components/Course/CourseDetail";
import CourseInfo from "./components/Course/CourseInfo"
import WhatsApp from "./components/whatsapp/whatsapp";
import Enroll from "./components/Enroll/Enroll";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Main />
         <Services/>
         <CourseInfo/>
        <WhatsApp/>
         <Footer/>
        </>} />
        <Route path="/Courses" element={<Courses />} />  
        <Route path="/CourseDetail/:id" element={<CousreDetail/>} />  
        <Route path="/About" element={<About/>} />   
        <Route path="/DemoForm" element={<DemoForm/>} />   
        <Route path="/Services" element={<Services/>} />    
        <Route path="/Career" element={<Career/>} />     
        <Route path="/Terms" element={<TermsAndConditions/>} />      
        <Route path="/Policy" element={<PrivacyPolicy/>} /> 
        <Route path="/Enroll" element={<Enroll/>} /> 

      </Routes>
    </div>
    
  );
};

export default App;
