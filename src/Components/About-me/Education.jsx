import React from 'react'
import education from './Education.css'
import school_img from '../../Assets/school_img.jpeg'
import clg_img from '../../Assets/clg_img.jpg'

const Education = () => {
  return (
    <>
    <div className="education-r">
    <span className='big-text school-text'>Higher Secondary </span>
    <div className="scl_img">
      <img src={school_img} alt="school" className='scl_img1' />
      <span className='big-text school-text scl-text'>Govt Sarvodaya Bal Vidyalaya Ramesh Nagar</span>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <span className='big-text date'>04/2019 - 04/2021</span>
      <span className='city'>-
      New Delhi</span>
    </div>
    <div className="clg_details">
      <span className='big-text clg-text'>Bachelor of Computer Application </span>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <img src={clg_img} alt="" className='clg-img' /><br /> <br />
      <span  className='clg-name'>St. Andrews Institute of Technology and
Management  
</span>
 <br /><br />
 <span className='clg-date'>09/2021 - 09/2024</span>
      <span className='clg-city'>-
      Haryana </span>
    </div>
   
      </div>
        
      <div className="email" style={{color:'black'}}>
        <span className='email-text'>Email</span>
        <span>amanvermao8210@gmail.com</span>
      </div>
      <div className="phone" style={{color:'black'}}>
        <span className='email-text'>Phone No:</span>
        <span>8210623958</span>
      </div>
      </>
  )
}

export default Education
