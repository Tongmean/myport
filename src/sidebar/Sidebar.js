import React,{useState} from 'react'
import "./Sidebar.css"
import Home from '../Home/Home'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Sidebar = () => {

    const [expandSidebar,setExpandsideBar] = useState(true);
    const handleExpandclick = ()=>{

        setExpandsideBar(!expandSidebar);

    }
  return (
    <div className='contain-fluid sidebar-section'>
        
        <div className='sidebar'>
            
            <div className='icon-for-sidebar-expand-and-collapse'>
                <p onClick={handleExpandclick}>
                    {expandSidebar ? (<BsChevronLeft size={30}/>):(<BsChevronRight size={30}/>)}
                </p>
            </div>

        </div>

        <div className='container'>
            <Home/>

        </div>
        
    </div>
  )
}

export default Sidebar;