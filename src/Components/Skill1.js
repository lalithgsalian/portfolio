import React from 'react'
import Card from './Card'
import HTML from '../images/html.svg'
import CSS from '../images/css.svg'
import Javascript1 from '../images/javascript.svg'
import React1 from '../images/react.svg'
import Python from '../images/python.svg'
import Java from '../images/java.svg'
import Cpr from '../images/c.svg'
import c from '../images/cpro.svg'
function Skill1() {
    const skillP=[
        {
            id:1,
            H:"PROGRAMMING LANGUAGES",
            L1:"HTML  /  CSS  /   JAVASCRIPT  /  REACT ",
            L4:"PYTHON  / JAVA  / C++ / C " ,
            I:HTML,
            C:CSS,
            J:Javascript1,
            R:React1,
            P:Python,
            JA:Java,
            CP:Cpr,
            CC:c
        },
        {
            id:2,
            H:"CERTIFICATIONS",
            L1:"=> Completed Certification Course in Coursera on C programming",
            L4:"=> Completed Certification Course in Coursera on HTML , CSS , Javascript"
        }
    ]
  return (
    <div>
        {
        skillP.map((item)=>(<Card Skill1={item} />))
        }
    </div>
  )
}

export default Skill1