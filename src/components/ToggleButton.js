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
    <button className=' m-2 w-6 h-6 flex justify-center items-center text-purple-600' onClick={(e)=>toggleSidebar(e)} >
        <FaBars className='w-full h-full' />
    </button>
  )
}

export default ToggleButton