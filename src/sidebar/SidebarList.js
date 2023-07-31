import React from 'react'
import Profile from '../asset/660920036.jpg'
import './SidebarList.css'
import { FcHome } from "react-icons/fc";
const SidebarList = ({expandSidebar}) => {
  return (
    <div>
        {expandSidebar ? (
            <div className='navbar-items'>
                <div className='sidebar-profile-pic'>
                    <img src={Profile} alt='Profile-Pic' ></img>
                </div>
                <div >
                    <ul>
                        <li className='navbar-item'> <FcHome size={30}/> Home</li>
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
