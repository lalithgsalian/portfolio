import { useEffect, useState } from 'react';
import React from 'react'
import '../CSS/Navbar.css'
import img1 from '../images/hamburger.png'
import { Link, useLocation } from 'react-router-dom';
function Navbar() {
  const[mobileNavBar,setMobileNavBar]=useState(false);
  const[ActiveNav,setActiveNav]=useState(true);
  const location=useLocation();

  useEffect(()=>{
      setActiveNav(location.pathname);
  },[location]);
  
  //this is how you create the function
  const hamburger=(value)=>{
    setMobileNavBar(value);
  }
  return (
    <div class="navbar" id="nav">
      <div class="desktop">
        <ul className='list'>
                {(ActiveNav==='/')?
                ""
                :
                <Link className="hm" to={'/'}>Home</Link>
                }
                {(ActiveNav==='/About')?
                ""
                :
                <Link to={'/About'} >About</Link>
                }
                  {(ActiveNav==='/skill1')?
                ""
                :
                <Link to={'/skill1'} onClick={()=>hamburger(false)}>Skills</Link>
                }
                 {(ActiveNav==='/Contact')?
                ""
                :
                <Link to={'/Contact'} onClick={()=>hamburger(false)}>Contact</Link>
                }
               
        </ul>
        </div>
            {
              !mobileNavBar?
            <div class="hamburger">
              <img src={img1} className="btn" onClick={()=>hamburger(true)} alt=""></img>
            </div>
            :
            ""
            }
            {
              mobileNavBar ?
              <div id="mysidebar" class="sidebar">
               
                <ul className="align">
                {(ActiveNav==='/')?
                ""
                :
                <li>
                  <Link to={'/'} onClick={()=>hamburger(false)}>Home</Link>
                  </li>
                }
                {(ActiveNav==='/About')?
                ""
                :
                <li>
                  <Link to={'/About'} onClick={()=>hamburger(false)}>About</Link>
                  </li>
               }
               {(ActiveNav==='/Skill1')?
                ""
                :
                <li>
                  <Link to={'/Skill1'} onClick={()=>hamburger(false)}>Skills</Link>
                  </li>
                }
                {(ActiveNav==='/Contact')?
                ""
                :
                <li>
                <Link to={'/Contact'} onClick={()=>hamburger(false)}>Contact</Link>
                </li>
                }
                </ul>
                <span className="closebutton" onClick={()=>hamburger(false)}>X</span>
              </div>

              :

              ""
            }
            </div>
  );
}

export default Navbar;