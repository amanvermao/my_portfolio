import React, { useState } from 'react'
import skills from './Skills.css'
import CountUp from 'react-countup';
import {motion , Variant } from 'framer-motion'
import { Opacity } from '@mui/icons-material';


const ImagAnimate={

  ofScreen:{y: 500, Opacity:0},
  onScreen:{y:0, Opacity:1 , 
    transition:{
      duration:2,
      type:"spring",
      bounce:0.4    } 

  }

}

const Skills = () => {


  return (
  <>
  <br />
  
   <br />
   <motion.div
   initial={'ofScreen'}
   whileInView={'onScreen'}
   viewport={{amount:0.1, once:false}}
   
    variants={ImagAnimate}
    className="big-skill-contaner">
    <span><h1>Skills</h1></span>
    <span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga harum facilis earum deleniti molestiae sapiente, eaque delectus unde inventore iusto? Id modi consequuntur earum, iure nisi aperiam eligendi recusandae aspernatur.</p></span>


    <div className='skills-main'>

      <div className="skill">
        <div className="outer">
        <div className="inner">
          <div id="number">
          <CountUp start={0} end={85} duration={2} delay={0}  />
          %
          </div>
        </div>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='svg-2'>
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" className='skill-1' />
         
 </svg>
    
      </div>
      <div className="skill">
        <div className="outer">
        <div className="inner">
          <div id="number">
          <CountUp start={0} end={80} duration={2} delay={0}  />
          %
          </div>
        </div>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='svg-2'>
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round"
         className='skill-2' />
 </svg>
      </div>
      <div className="skill">
        <div className="outer">
        <div className="inner">
          <div id="number">
          <CountUp start={0} end={65} duration={2} delay={0}  />
          %
          </div>
        </div>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='svg-2'>
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" 
          className='skill-3'
         />
 </svg>
      </div>
      <div className="skill">
        <div className="outer">
        <div className="inner">
          <div id="number">
          <CountUp start={0} end={67} duration={2} delay={0}  />
          %
          </div>
        </div>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='svg-2'>
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" 
          className='skill-4'
         />
 </svg>
      </div>
    </div>
     <div className="skill-list">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>React.js</li>
      </ul>
     </div>
    </motion.div>
    </>


  )
}

export default Skills
