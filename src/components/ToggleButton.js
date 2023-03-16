import React from 'react';
import {FaBars} from "react-icons/fa";

const ToggleButton = () => {

    const toggleSidebar = (e) =>{
        var Sidebar = document.getElementById('Sidebar');
        if(Sidebar.style.display === "block"){
          Sidebar.style.display = "none";
        }else{
          Sidebar.style.display = "block";
        }
    } 

  return (
    <button className='end-0 w-8 m-3 absolute md:hidden flex justify-center items-center' style={{zIndex:99999999}} onClick={(e)=>toggleSidebar(e)} >
        <FaBars className='w-full h-full' />
    </button>
  )
}

export default ToggleButton