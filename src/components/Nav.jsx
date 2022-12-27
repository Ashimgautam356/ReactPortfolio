import React from 'react';
import '../style/Nav.sass'
import {Link} from 'react-router-dom'
import { VscMenu } from "react-icons/vsc";
const Nav = () => {
  return (
   <nav>
    <div className='logo'>
      <p> <Link to="/">A<span>s</span>him<span>G</span></Link> </p>
    </div>
    <div className='deskNavi'>
        <ul>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
    <div className='mobileNavDesign'>
      <p><VscMenu /></p> 
    </div>
   </nav>
  )
}

export default Nav