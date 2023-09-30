import React from 'react'
import about from './About.css'
import abourbg from '../../Assets/about-bg.png'

import Education from './Education'
import {motion} from 'framer-motion'



const About = () => {
  return (
    <>
    <motion.div 
      initial={{width: 0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth, transition:{
      duration:0.1
    } }}
  className='about'>
    <div className="left-a">

    <span className='big-text about-text'>Personal Details</span>
    <div className="details">
      <span className='big-text about2-text'> Name</span>
      <span className='big-text about2-text'>Age</span>
      <span className='a-text'> Aman Verma </span>
      <span className='a-text age-text'>20</span>
      <span className='big-text about2-text'> Father </span>
      <span className='big-text about2-text'>Mother </span>
      <span className='a-text a-small'> Manoj Kumar Verma </span>
      <span className='a-text a-small'>Manisha Verma</span>
    
    </div>
    <span className='big-text edu-text strock-text'>Education</span>

  
   
    </div>
   
    <div className="right-a">
     <div className="a-img">
      <img src={abourbg} alt="" />

  <Education/>
     
      </div>
      
     </div>
    </motion.div>
    

   
     
   </>
  )
}

export default About
