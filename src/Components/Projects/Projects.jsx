import React from 'react'
import projects from './Projects.css'
import card1 from '../../Assets/card1.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import card2 from '../../Assets/card2.png'
import card3 from '../../Assets/card3.png'
import {motion} from 'framer-motion'
const Projects = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x: window.innerWidth, transition:{
      duration:0.1
    }}}
     className='Project-cards'>
    <div className="card1">
      <img src={card1} alt="card_img" className='card-img' />
      <span className='card-text'>Gym Website(FitClub)React_project</span>
      <div className="btn arrow_btn card_btn">
          Learn More 
          <div className="arrow_c"><ArrowForwardIcon/></div>
         </div>
    </div>
    <div className="card1">
      <img src={card2} alt="card_img" className='card-img' />
      <span className='card-text'>Add_to_Cart Project</span>
      <div className="btn arrow_btn card_btn">
          Learn More 
          <div className="arrow_c"><ArrowForwardIcon/></div>
         </div>
    </div>
    <div className="card1">
      <img src={card3} alt="card_img" className='card-img' />
      <span className='card-text'>Crypto_react_project </span>
      <div className="btn arrow_btn card_btn">
          Learn More 
          <div className="arrow_c"><ArrowForwardIcon/></div>
         </div>
    </div>
      
    </motion.div>
  )
}

export default Projects
