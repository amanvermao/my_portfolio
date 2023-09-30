import React from 'react'
import footer from './Footer.css'
import aman_moon from '../Assets/aman_moon.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <div className='footer'>
     <div className="left-f">
     
    <img src={aman_moon} alt="footer=logo" className='footer-logo' />
     </div>
     <div className="right-f">
      <div className="footer-social-links">
      <a href="https://www.instagram.com/aman_vermao/" target='_blank'><FacebookIcon className='s-icon'/></a>
      <a href="https://www.instagram.com/aman_vermao/" target='_blank'><InstagramIcon className='s-icon'/></a>
      <a href="https://www.linkedin.com/in/aman-verma-243530220/"  target='_blank'><LinkedInIcon className='s-icon'/></a>
    </div>
    <span className='cr-text'>Copyright 2022. All Rights Reserved</span>
     </div>
     
    </div>
  )
}

export default Footer
