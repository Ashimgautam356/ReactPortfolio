import React from 'react'
import '../style/Footer.sass'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>

        <p>gautamashim15@gmail.com</p>
        <p><Link to="/contact">Follow Me</Link></p>
    </div>
  )
}

export default Footer