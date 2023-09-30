import React from 'react'
import header from './Header.css'
import aman_mooon from '../Assets/aman_moon.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
  <div className="logo">
  <img src={aman_mooon} alt="" className='logo_img' />
  </div>
    <div className="nav">
      <ul>
      <Link to={'./'}><li style={{listStyle:"none", color:'white'}}>Home</li> </Link>
      <Link to={'/About'}><li style={{listStyle:"none", color:'white'}} >About Me</li></Link>
     <Link to={'./Projects'}><li style={{listStyle:"none", color:'white'}}>My Projects</li> </Link> 
      <Link to={'./Experience'}>
      <li style={{listStyle:"none", color:'white'}}>Work Expiriance</li>
      </Link></ul>
    </div>
    <div className="social_links">
    <a href="https://www.instagram.com/aman_vermao/" target='_blank'><FacebookIcon className='icons'/></a>
   <a href="https://www.instagram.com/aman_vermao/" target='_blank'><InstagramIcon className='icons'/></a>
   <a href="https://www.linkedin.com/in/aman-verma-243530220/"  target='_blank'><LinkedInIcon className='icons'/></a>
 </div>

 <div className="contact_btn">
<Link to={'./Contact'}><button className='btn'>Let's Connect</button> </Link> 
 </div>
  
    </div>
  )
}

export default Header
