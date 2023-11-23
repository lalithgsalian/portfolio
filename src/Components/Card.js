import React from 'react'
import '../CSS/Skill1.css'
function Card({Skill1}) {
    console.log(Skill1)
  return (
    <div className='cards'>
        <h2 className='h2'>{Skill1.H}</h2>
        
        <h3 className='h1'>{Skill1.L1}</h3>
        <h3 className='h1'>{Skill1.L4}</h3>
        <img src={Skill1.I} alt=""></img>
        <img src={Skill1.C} alt=""></img>
        <img src={Skill1.J} alt=""></img>
        <img src={Skill1.R} alt=""></img>
        <img src={Skill1.P} alt=""></img>
        <img src={Skill1.JA} alt=""></img>
        <img src={Skill1.CP} alt=""></img>
        <img src={Skill1.CC} alt=""></img>
    </div>
  )
}

export default Card