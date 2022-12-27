import React from 'react'
import '../style/Contact.sass'
import {Link } from 'react-router-dom'
import { FaFacebook ,FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <section className='contact'>
        <div className='contact-left'>
            <h1>
                Let<span>'</span>s Chat...<span>!</span>
            </h1>
            <form>
                <div>
                    <label for="fname" className='label'>Name: </label>
                    <input type="text" id="fname" name="fname" placeholder="John" />
                </div>
                <div className='div'>
                    <label for="lname">Email:  </label>
                    <input type="email"  placeholder='abcd123@gmail.com' />
                </div>
                <div className='div'>
                    <label htmlFor="text">Comment:  </label>
                    <input type="text" />
                </div>
                
                <button>Send</button>
            </form>
        </div>
        <div className='contact-right'>
           <h1> 
                <span>F</span>ollow <span>M</span>e
           </h1>
           <div className='social-media'>
            <div>
                <a href='https://www.facebook.com/ashim.gautam.10004'><FaFacebook></FaFacebook></a>
                <a href='https://www.instagram.com/ashim_gautam_/'><FaInstagram></FaInstagram></a>
            </div>
            <div>
                <a href='https://github.com/Ashimgautam356'><FaGithub></FaGithub></a>
                <a href='https://www.linkedin.com/in/ashim-gautam-83289925a/'><FaLinkedin></FaLinkedin></a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact