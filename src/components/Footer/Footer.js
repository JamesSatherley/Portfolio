import React from 'react';

import './Footer.scss';
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker';

const Footer = ({darkMode}) => {
  const gaEventTracker = useAnalyticsEventTracker('Navbar');
  return (
    <div onClick={() => gaEventTracker("footer")} className='footer' style={{backgroundColor: darkMode ? 'rgb(17 24 39 / 1)': 'rgb(255 255 255 / 1)'}}>
      <h1 className='text' style={{color: darkMode ? 'rgb(229 231 235 / 1)': 'rgb(30 30 30 / 1)'}}>&#169; James Satherley | contact@james.org.nz</h1>
    </div>
  )
}

export default Footer;