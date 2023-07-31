import React from 'react'
import Profile from '../asset/660920036.jpg'
import './SidebarList.css'
import { FcHome, FcNightPortrait, FcTodoList, FcContacts, FcFactory, FcSalesPerformance } from "react-icons/fc";
import {MdBiotech} from "react-icons/md"
// import {FiSlack} from "react-icons/md"
// import {Link} from "react-scroll"
import {MdCastForEducation} from "react-icons/md"

const SidebarList = ({expandSidebar}) => {
  return (
    <div>
        {expandSidebar ? (
            <div className='navbar-items'>
                <div className='sidebar-profile-pic'>
                    <img src={Profile} alt='Profile-Pic' ></img>
                </div>
                <div>
                    <ul>
                        <li className='navbar-item'> <FcHome size={30}/> Home</li>
                        <li className='navbar-item'> <FcNightPortrait size={30}/>  About</li>
                        <li className='navbar-item'> <FcFactory size={30}/>  Work Experience</li>
                        <li className='navbar-item'> <MdBiotech size={30}/>  Tech Stack</li>
                        <li className='navbar-item'> <MdCastForEducation size={30}/>  Education</li>
                        <li className='navbar-item'> <FcTodoList size={30}/>  Project</li>
                        <li className='navbar-item'> <FcSalesPerformance size={30}/>  Testimonial</li>
                        <li className='navbar-item'> <FcContacts size={30}/>  Contact</li>
                    </ul>
                </div>

            </div>
        ):(
            <div>
                xvluh
            </div>
        )}
    </div>
  )
}

export default SidebarList;
