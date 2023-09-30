import React from 'react'
import experience from "./Experience.css"
import inetfreak_img from '../../Assets/inetfreak_img.png'
import {motion} from 'framer-motion'
const Experience = () => {
  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x: window.innerWidth, transition:{
      duration:0.1
    }}}
     className='experience'>
      <div className="exp-card1">
      <span className='exp-text'>Content Writer</span>
       <img src={inetfreak_img} alt="inetfrak_logo" className='inetfrak_logo'/>
       <span className='exp-c_name'>www.inetfreak.com</span>
       <div className="dates">
       <span className='exp-c_name'>09/2022 - 11/2022</span>
       <span className='exp-c_name'>-Work From home</span>
        </div>
        <span style={{ fontSize:'18px', fontFamily:'Times New Roman', textTransform:'capitalize'}}>Inetfreak is an informative blog site for topics related to business, fashion, education, entertainment, science, and many more.
        </span>
        <br /><br />
        <span style={{ fontSize:'20px', fontFamily:'Times New Roman', textTransform:'capitalize'}}>
Responsibilities</span>
        <div className="list">
        <ul>
          <li>Wrote and edited high-quality content and visually impactful
programs under deadline pressure with exciting, captivating, and authentic approach. </li>
          <li>Completed thorough research into assigned topics.</li>
          <li>Crafted SEO-friendly content for websites and blog posts to
increase organic traffic.</li>
          <li>Performed keyword research to optimize content for SEO</li>
          <li>post articles on WordPress
</li>
        </ul>
        </div>
       

      </div>
    </motion.div>
  )
}

export default Experience
