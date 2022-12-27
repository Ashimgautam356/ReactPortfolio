import React from 'react'
import '../style/Service.sass'
import maint from '../image/maintain.png'
import opt from '../image/opt.png'
import respon from '../image/responsive.png'

const Service = () => {
  return (
    <section className='service'>
        <div className='outerbox'>
            <div className='insidebox'>
                <div>
                    <img src={respon} alt="" />
                </div>
                <p>Responsive Design</p>
            </div>
            <div className='insidebox'>
                <div>
                    <img src={maint} alt="" />
                </div>
                <p>Support And Maintenance</p>
            </div>
            <div className='insidebox'>
                <div>
                    <img src={opt} alt="" />
                </div>
                <p>Web Optimization</p>
            </div>
        </div>
    </section>
  )
}

export default Service