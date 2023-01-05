import React from 'react'
import '../style/Aboutme.sass'
import myImage from'../image/img1.png'
const Aboutme = () => {
  return (
   <section className='aboutme'>
    <div className='imageSection'>
      <div className='img'>
        <img src={myImage} alt="Ashim" />
      </div>
      <div className='info'>
        <p>Ashim Gautam</p>
        <p>Age: 19</p>
        <p>From Nepal</p>
      </div>
    </div>
    <div className='discreption'>
      <p> 
"Hello,
<br />
My name is Ashim Gautam and I am a full stack developer based in Nepal. I have been working in the tech industry for approximately 1 year and have gained expertise in various technologies such as HTML, CSS, JavaScript, React, Bootstrap, SASS, Tailwind, Git, GitHub, C++, and Figma.
<br />
I am passionate about constantly learning and improving my skills in order to excel in my field. Thank you for visiting my portfolio website. If you have any questions, please do not hesitate to reach out
</p>
</div>
   </section>
  )
}

export default Aboutme