import React from 'react'
import '../CSS/Skills.css'
// import img1 from '../images/download.png'
// import img2 from '../images/code.jpg'
function Skills() {
  return (
    <div>
        <div className="skills">
            <h2>Programming Languages</h2>
            <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Java</li>
                <li>Python</li>
                <li>C/C++</li>
                {/* <img src={img1}>Image</img> */}
            </ul>
        </div>
      <div className='certificate'>
        <h2>Certifications</h2>
        <ul>
          <li>Completed Certification Course in Coursera on C programming</li>
          <li>Completed Certification Course in Coursera on HTML , CSS , Javascript</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills