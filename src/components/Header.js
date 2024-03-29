import React, { useState, useEffect } from "react";
// import { useStateValue } from "../redux/StateProvider";
import {
  FaCamera,
  FaMicrophone,
  FaSearch,
  FaShoppingCart,
  FaMicrophoneSlash,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies ,removeCookie } from "react-cookie";



const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Header = ({ handleSearch, isAdmin }) => {
  const navigate = useNavigate(); 
  const [isListening, setIsListening] = useState(false);
  const [input, setInput] = useState("");
  const [note, setNote] = useState("");
  const [selected, setSelected] = useState("all");
  const [userData, setUserData] = useCookies("userData"); 
  const [userName, setUserName] = useState("Account")
  
  // const [{ basket, user }, dispatch] = useStateValue();
  

  useEffect(() => {
    if (note !== null) {
      setInput(note);
      handleSearch(note);
    }
  }, [note,handleSearch,setInput]);
    
  useEffect(() => {
    handleListen();
  }, [isListening ])

  useEffect(()=>{
    if(userData !== ""){
      setUserName(userData.userData[0].userName);
    }else{
      setUserName("Accounts")
    }
  },[userData])
  
  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        // console.log("Continue");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        // console.log("Stopped Mic on Click");
      };
    }

    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      // console.log(transcript);
      setNote(transcript);
      // history.push("/products/all");
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };

  };
  const handleChange = (event) => {
    event.preventDefault();
    setNote(event.target.value);
  };

  const handleCategoryChange = (e) =>{ 
    setSelected(e.target.value);
    navigate("/products");
  }


  //  dropdown lists
  const dropDownToggler = () =>{

      var dropdown = document.getElementById('dropdown');
          dropdown.classList.toggle("hidden")

  }

  const logOut = () =>{
    removeCookie('userData');
     axios.get('http://localhost:7000/user/logOut').then((res)=>{
        console.log(res);
     })
  }

  useEffect(()=>{
     handleSearch(selected);
  },[selected])

  return (

    <>
    <div className=" bg-white h-16 md:px-6 px-3 shadow-sm w-screen flex justify-between items-center" >
       <div className="w-1/2 h-full flex items-center justify-start">
          <div className="md:mx-4 mx-2">
            <Link to="/" className="text-decoration-none text-2xl font-bold text-blue-500" >
                Shopzy
            </Link>
          </div>
      
          {/* select */}
           <div className="h-full flex justify-end items-center text-primary rounded-md mx-2 appearance-none outline-none">
              <select name="Category" className="h-1/2 text-decoration-none text-purlpe-600 bg-transparent font-semibold rounded-lg text-center border-none" onChange={(e)=>{handleCategoryChange(e)}} >
                <option value="categories">Categories</option>
                <option value="all" className=" text-decoration-none" >all</option>
                <option value="bag" className=" text-decoration-none" >bags</option>
                <option value="clothing" className="text-decoration-none" >clothings</option>
                <option value="sport" className=" text-decoration-none" >sports</option>
                <option value="television" className=" text-decoration-none" >televisions</option>
               </select>
             </div>

             <div className="h-full w-1/2 lg:flex justify-start items-center list-none mx-2 hidden" >
                  
                      <Link to="/deals" className="no-underline mx-3" >
                         <li className="font-semibold">
                              Deals
                         </li>
                      </Link>

                       <Link to="/products" className="no-underline mx-3" >
                         <li className="font-semibold">
                              Products
                         </li>
                      </Link>

                      <Link to="/saved" className="no-underline mx-3" >
                         <li className="font-semibold">
                              Saved
                         </li>
                      </Link>

                      <Link to="/delivery" className="no-underline mx-3" >
                         <li className="font-semibold">
                              Delivery
                         </li>
                      </Link>
            
             </div>
       </div>   
           
       <div className="h-5/6 w-1/2 flex justify-end items-center ">

    {/* searchInputs  */}
           <div className="w-1/3 h-full md:flex justify-evenly items-center mx-2 md:mx-4 hidden" >
           <button
              type="button"
              className="mx-2 border-0 rounded-0 bg-transparent text-primary"
            >
              <FaCamera className="text-blue-600" />
            </button>
            <button
              type="button"
              className="mx-2 border-0 rounded-0 bg-transparent text-primary"
              onClick={() => setIsListening((prevState) => !prevState)}
            >
               {!isListening && (
              <FaMicrophoneSlash  className="text-blue-600" style={{fontSize:"19px"}}/>
                   
              )}
              {isListening && (
              <FaMicrophone className="text-blue-600" style={{fontSize:"19px"}}/>
              )}
            </button>
             <div className="bg-gray-100 rounded-full h-4/6 flex justify-end items-center">
               <input
              type="text"
              name="Search"
              id="Search"
              onChange={(e)=>handleChange(e)}
              value={note}
              className="w-10/12 bg-transparent px-2"
              placeholder="Search"
            />
            <FaSearch className="mx-1 text-blue-600"/>
             </div>
           </div>

    {/* user signUp account */}
           <div className="flex items-center justify-center font-semibold mx-2 md:mx-4 text-blue-600" >
               {userData === "" ? <button type="button" className="flex justify-center items-center bg-transparent" onClick={dropDownToggler} >
                  <FaUser className="text-blue-600 mx-1" />
                   Account
               </button> :<button className="flex justify-center items-center bg-transparent" onClick={dropDownToggler} >       
                  <FaUser className="text-blue-600 mx-1" /> 
                  {userName} 
                  </button>    
              }
           </div>


         
    {/*  cart */}
           <div className="flex justify-center items-center mx-2 md:mx-4">
           {/* <small
            className=""
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            {basket?.length}
          </small> */}
            <Link to="/cart" className="text-decoration-none flex justify-center items-center" >
            <button
              type="button"
              className="border-0 animation text-md px-1 "
            >
              <FaShoppingCart className="text-xl text-blue-500" />
            </button>
             <span className="text-md font-semibold text-blue-500" >
               Cart
             </span>
          </Link>
            </div>
           </div>
    </div> 

    {/* account dropdowns  */}
    <div className="bg-white w-60 h-40 absolute right-0 hidden z-50 m-2 list-none p-2 shadow-lg" id="dropdown" >
          
          {userData === "" ? <div className="w-full h-full flex flex-col justify-center items-center"><Link to="/signUp" className="text-decoration-none w-full h-1/3 flex justify-center items-center border-bottom border-top border-gray-900" >
             <li className="w-full h-full flex justify-center items-center">
                  SignUp
             </li>
         </Link>

         <Link to="/login" className="text-decoration-none w-full h-1/3 flex justify-center items-center border-bottom border-gray-900"  >
            <li className="w-full h-full flex justify-center items-center">
                  Login
            </li>
         </Link>
         </div> : <div className="w-full h-full flex flex-col justify-center items-center">
            <button type="button" className="text-decoration-none w-full h-1/3 flex justify-center items-center border-bottom border-top border-gray-900" onClick={logOut} >
             <li className="w-full h-full flex justify-center items-center">
                  logOut
             </li>
         </button>
          </div> 
         }
  
    </div>
    </>

  );
};

export default Header;
