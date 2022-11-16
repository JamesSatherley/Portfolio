import React from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";
import './Navbar.scss';

const Navbar = ({setDarkMode, darkMode}) => {
  return (
    <div className='nav'>
      <BsFillMoonStarsFill
        onClick={() => setDarkMode(!darkMode)}
        className="icon"
      />
      
      <a
        className="resume-button"
        href="https://james.org.nz/resume.pdf"
      >
        Resume
      </a>
    </div>
  )
}

export default Navbar;