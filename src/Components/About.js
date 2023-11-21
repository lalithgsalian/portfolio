import React from 'react'
import '../CSS/Aboutus.css'
import img1 from '../images/pic.jpeg'
function About() {
  return (
    <div className="Main">
      <div className='twoinone'>
       <div className='picture'>
        <img src={img1} alt="" className='pic'></img>
       </div>
    
        <div className="aboutme">
            <h2>About Me</h2>
            <p>
                Welcome to my portfolio! I'm a passionate web developer with a strong background in HTML, CSS, and JavaScript.
                I love creating responsive and user-friendly websites. When I'm not coding, you can find me exploring new technologies
                and staying up-to-date with the latest trends in web development.
            </p>
        </div>
        </div>
         <div className='Education'>
            <h1>Education</h1>
            <h3>Bachelor of Engineering</h3>
            <ul>
            <li>Currently pursuing my BE in Computer Science and Engineering at Canara Engineering College</li>
            </ul>
            <h3>Pre University</h3>
            <ul>
            <li>Completed my 12th at St Aloysius PU College</li>
            </ul>
            <h3>SSLC</h3>
            <ul>
            <li>Completed my 10th at St Aloysius High School</li>
            </ul>
        </div> 
        </div>
   
  )
}

export default About;
