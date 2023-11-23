import React from 'react'
import '../CSS/Home.css'
import About from './About'

import Contact from './Contact'
import Skill1 from './Skill1'
function Home() {
  return (
    <div>
         <div className="header">
            
            <h1>Lalith G Salian</h1>
            <h2 className='home'>Web Developer</h2>
            
        </div>
<About />
<Skill1 />
<Contact />
    </div>
  )
}

export default Home