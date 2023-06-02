import React from "react";
import {
   FaCompass,
   FaExclamationCircle,
   FaHeart,
   FaPhoneAlt,
   FaCog,
   FaTruckMoving,
   FaHome,
   FaBoxes,
}  from "react-icons/fa";
import {Link } from "react-router-dom";



const Sidebar = () => {

  const toggleSidebar = (e) =>{
    var Sidebar = document.getElementById('Sidebar');

    if(Sidebar.style.display === "block"){
      Sidebar.style.display = "none";
    }else{
      Sidebar.style.display = "block";
    }
}   

  return (
    <div className="z-50 bg-white w-44 h-screen hidden md:flex md:flex-col justify-between left-0 position-absolute shadow-lg" id="Sidebar">
      
     

      <div className="h-1/2 flex flex-col justify-evenly items-center">

         <div className="w-full h-14 bg-blue-300 relative flex justify-center items-center" >
          <button type="button" className="w-10/12 h-9/12 py-1 border-2 border-indigo-500 text-indigo-900 rounded-xl cursor-pointer" onClick={toggleSidebar} >
              Close Menu 
          </button>
         </div>

        {/*  Home  */}
        <li
          className="sidebarNavIconsListElem w-10/12 flex justify-center items-center"
          data-bs-toggle="tooltip"
          title="Home"
        >
          <Link to="/" className="text-decoration-none w-full flex justify-between align-items-center py-2 px-3">
            <FaHome className="text-indigo-500" />
            <strong className="text-decoration-none" >
              Home
            </strong>
          </Link>
        </li>
  
        <li
          className="sidebarNavIconsListElem w-10/12 flex justify-center items-center"
          data-bs-toggle="tooltip"
          title="Explore"
        >
          <Link to="/explore" className="w-full text-decoration-none flex justify-between items-center py-2 px-3">
            <FaCompass className="text-indigo-500" />
            <strong className="text-indigo-500" >Explore</strong>
          </Link>
        </li>
        {/*  products */}
        <li
          className="sidebarNavIconsListElem w-10/12 flex justify-center items-center"
          data-bs-toggle="tooltip"
          title="Products"
        >
          <Link to="/products" className="w-full text-decoration-none flex justify-between items-center py-2 px-3">
            <FaBoxes className="text-indigo-500" />
            <strong className="text-indigo-500" >
              Products  
            </strong>
          </Link>
        </li>
        {/*  Saved */}
        <li
          className="sidebarNavIconsListElem w-10/12 flex justify-center items-center"
          data-bs-toggle="tooltip"
          title="Saved"
        >
          <Link to="/saved" className="w-full text-decoration-none flex justify-between align-items-center py-2 px-3">
            <FaHeart className="text-indigo-500" />
            <strong className="text-indigo-500" >
              Saved
            </strong>
          </Link>
        </li>
        {/*  */}
        <li
          className="sidebarNavIconsListElem w-10/12 flex justify-center items-center"
          data-bs-toggle="tooltip"
          title="OrdersNDelivery"
        >
          <Link to="/orderNdelivery" className="w-full text-decoration-none flex justify-between align-items-center py-2 px-3">
            <FaTruckMoving className="text-indigo-500" />
            <strong className="text-decoration-none" >
              Track
            </strong>
          </Link>
        </li>
        {/*  Saved */}
        <li
          className="sidebarNavIconsListElem w-10/12 flex justify-center items-center"
          data-bs-toggle="tooltip"
          title="After Sales"
        >
          <Link to="/afterSales"  className="w-full text-decoration-none flex justify-between align-items-center py-2 px-3">
            <FaPhoneAlt className="text-indigo-500" />
            <strong className="text-decoration-none" >
              Helpline
            </strong>
          </Link>
        </li>
      </div>


      <div className="h-1/2 flex flex-col justify-center items-center">
        <li
          className="sidebarNavIconsListElem w-10/12 flex justify-center items-center my-2"
          data-bs-toggle="tooltip"
          title="Feedback"
        >
          <Link to="/feedback"  className="w-full text-decoration-none flex justify-between align-items-center py-2 px-3">
            <FaExclamationCircle className="text-indigo-500 " />
            <strong className="text-decoration-none" >
              Report
            </strong>
          </Link>
        </li>
        {/*  settings */}
        <li
          className="sidebarNavIconsListElem w-10/12 flex justify-center items-center my-2"
          data-bs-toggle="tooltip"
          title="Settings"
        >
          <Link to="/Settings" className="w-full text-decoration-none flex justify-between items-center py-2 px-3">
            <FaCog className="text-indigo-500" />
            <strong className="text-indigo-500" >
              Settings
            </strong>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
