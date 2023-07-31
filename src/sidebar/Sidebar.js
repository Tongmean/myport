import React,{useState} from 'react'
import "./Sidebar.css"
import Home from '../Home/Home'
import SidebarList from './SidebarList';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Sidebar = () => {

    const [expandSidebar,setExpandsideBar] = useState(false);
    const handleExpandclick = ()=>{

        setExpandsideBar(!expandSidebar);

    }
  return (
    <div className='contain-fluid sidebar-section'>
        
        <div className={expandSidebar ? ('sidebar-expand sidebar'):('sidebar')}>
            
            <div className='icon-for-sidebar-expand-and-collapse'>
                <p onClick={handleExpandclick}>
                    {expandSidebar ? (<BsChevronLeft size={30}/>):(<BsChevronRight size={30}/>)}
                </p>
            </div>

            <SidebarList expandSidebar={expandSidebar} />

        </div>

        <div className='container'>
            <Home/>

        </div>
        
    </div>
  )
}

export default Sidebar;