import React from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";
import './Navbar.scss';
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker';

const Navbar = ({setDarkMode, darkMode}) => {
  const gaEventTracker = useAnalyticsEventTracker('Navbar');
  return (
    <div className='nav'>
      <BsFillMoonStarsFill
        onClick={() => {
          setDarkMode(!darkMode);
          gaEventTracker('dark mode');
        }}
        className="icon"
      />
      
      <a
        onClick={()=>gaEventTracker('resume')}
        className="resume-button"
        href="https://drive.google.com/file/d/18v0QBSwEHPv7Yq9h9mKBosL6wOA64QBf/view?usp=sharing"
      >
        Resume
      </a>
    </div>
  )
}

export default Navbar;