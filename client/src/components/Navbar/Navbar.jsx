import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className='Navbar'>
      <div className='logo'>
        <Link to="/"><h1>Neinus Tech</h1></Link>
      </div>
      <div ref={menuRef}>
        <ul
          className={isMenuOpen ? "nav-links-mobile" : "nav-links"}
          onClick={handleToggle}
        >
          <li><NavLink to="/">Home</NavLink></li>
          
          <li><NavLink to="/Services">Services</NavLink></li>
          <li><NavLink to="/Courses">Course</NavLink></li>
        
          <li> <NavLink to="/About">About Us</NavLink></li>
          <li> <NavLink to="/Career">Careers</NavLink></li>
          
        </ul>
      </div>
      <div className="mobile-menu-icon" onClick={handleToggle}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
