import React from 'react'
import '../CSS/Home.css'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
function Home() {
  return (
    <div>
         <div className="header">
            
            <h1>Lalith</h1>
            <p>Web Developer</p>
            
        </div>
<About />
<Skills />
<Contact />
    </div>
  )
}

export default Home