import React from 'react'
import '../style/Project.sass'
import { FaFacebookF,FaListUl ,FaPlayCircle} from "react-icons/fa";
const Project = () => {
  return (
    <section className='project'>
        <div className='perception'>
            <h2> <span>P</span>roj<span>e</span>ct</h2>
            <p>Hover see details and click to see full project details.</p>
        </div>
        <div className='projectList'>
            <div  className='fbproject'>
                <p><FaFacebookF></FaFacebookF> </p>
                <h1>Facebook UI Clone</h1>
            </div>
            <div  className='todoproject'>
                <p><FaListUl></FaListUl> </p>
                <h1>Todo List</h1>
            </div>
            <div  className='videoproject'>
                <p> <FaPlayCircle></FaPlayCircle></p>
                <h1>Video Hub</h1>
            </div>
        </div>
    </section>
  )
}

export default Project