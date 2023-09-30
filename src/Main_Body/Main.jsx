import React from 'react'
import main from './Main.css'
import aman_img from '../Assets/aman_img.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Skills from './Skills';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'




const Main = () => {
  return (
    <>
    <motion.div className='main'
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x: window.innerWidth, transition:{
      duration:0.1
    }}}
    >
    
     <div className="m-left">
     
      
       <button className='btn m-btn'><p>Welcome to my portfolio</p></button>
       <div className="head-text">
       <div className="big-text dev-text">
       <span>
        Hi! I'm Aman Verma i am a web devloper
       </span>
       </div></div>
       <div className="small-text"><span>
       I am a web Developer by profession with a passion for creating attractive and interactive websites meeting customer needs and exceeding expectations. I worked on technologies like React.js and Next.js to develop websites from scratch and improve the existing website. Now I am working on my backend development skills, I am a Detail-oriented, organized, and meticulous employee. I will Works at a fast pace to meet tight deadlines. I am an Enthusiastic team player who is ready to contribute to company's success. 
       </span>
       </div>
     </div>
      <br />
      <br />
      <br />
    <Link to={'./Contact'}><div className="btn arrow_btn">
          Let's Connect 
          <div className="arrow_c"><ArrowForwardIcon/></div>
         </div></Link> 
     <div className="m-right">
         <motion.div
         animate={{
          translateY:"20px",
        }} 
        
        
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType:"reverse"
        }}
         
          className="my-logo">
         <img src={aman_img} alt=""  className='aman_img'/>
         </motion.div>
     </div>
     <Skills/>

    </motion.div>
   
    </>
  )
}

export default Main
