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
        href="https://drive.google.com/file/d/18v0QBSwEHPv7Yq9h9mKBosL6wOA64QBf/view?usp=sharing"
      >
        Resume
      </a>
    </div>
  )
}

export default Navbar;