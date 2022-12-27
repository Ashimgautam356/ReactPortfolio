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
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
</div>
   </section>
  )
}

export default Aboutme