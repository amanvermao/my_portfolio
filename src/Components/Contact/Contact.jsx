import React from 'react'
import contact from './Contact.css'
import contactimg from '../../Assets/Contact-img-removebg.png'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <motion.div 
  initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x: window.innerWidth, transition:{
      duration:0.1
    }}}
    className='Contact'>
     <div className="left-c">
     <div className="Contact-img">
        <img src={contactimg} alt="" />
     </div>
     </div>
      <div className="right-c">
        
        <div className="form">
            <span className='big-text c-big-tect'>Get In Touch</span>
              <div className="inputs">
                <input type="text"  placeholder='First Name'/>
                <input type="text" placeholder='Last Name' />
                <input type="email"  placeholder='Email' />
                <input type="text" placeholder='Phone No:' />
                <textarea cols="40" rows="40" placeholder='Message'> </textarea>
              </div>

              <div className="submit">
                <button className='btn s-btn'><p>send</p></button>
              </div>
        </div>

      </div>

    </motion.div>
    
  )
}

export default Contact
