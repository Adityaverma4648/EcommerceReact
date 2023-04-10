import React, { useState, useEffect } from "react";
import { useStateValue } from "../redux/StateProvider";
import {
  FaCamera,
  FaMicrophone,
  FaSearch,
  FaShoppingCart,
  FaMicrophoneSlash
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Header = ({ handleSearch }) => {
  const navigate = useNavigate(); 
  const [isListening, setIsListening] = useState(false);
  const [input, setInput] = useState("");
  const [note, setNote] = useState("");

  const [{ basket, user }, dispatch] = useStateValue();
  

  useEffect(() => {
    if (note !== null) {
      setInput(note);
      handleSearch(note);
    }
  }, [note]);
    
  useEffect(() => {
    handleListen();
  }, [isListening]);

  
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


   const handleCategoryChange  = (e) =>{ 
    e.preventDefault();
      alert("SEARCH FROM HEADER : ",e.target.value);
      handleSearch(e.target.value);
      navigate("/products");
  }

  return (
    <div className="Header" >
      <div className="w-20 flex items-center justify-center">
          <Link to="/" className="text-black text-decoration-none font-semibold" >LOGO</Link>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-full w-full px-2 d-flex justify-end items-center">
          {/* search form */}
          <div className="h-8/12 w-6/12 flex justify-end items-center text-primary rounded-md">
             <select name="Category" className="w-2/12 p-2 md:py-2 text-decoration-none text-purlpe-600 bg-transparent border-2 border-gray-500/20 rounded-lg" onChange={(e)=>{handleCategoryChange(e)}} >
                <option value="all" className="text-purple-600 text-decoration-none" >all</option>
                <option value="bag" className="text-purple-600 text-decoration-none" >bags</option>
                <option value="clothing" className="text-purple-600 text-decoration-none" >clothings</option>
                <option value="sport" className="text-purple-600 text-decoration-none" >sports</option>
                <option value="television" className="text-purple-600 text-decoration-none" >televisions</option>
             </select>
             <div className="p-2" >
             <FaSearch className="mx-1" color="#ba2cde"  />
             </div>
            <input
              type="text"
              name="Search"
              id="Search"
              onChange={(e)=>handleChange(e)}
              value={note}
              className="w-10/12 bg-transparent border-2 border-gray-500/20 rounded-lg p-2 text-gray-900"
              placeholder="Search"
            />
            
          </div>

          {/* Search Icons  */}
          <div className=" h-full flex justify-center items-center">
            <button
              type="button"
              className="mx-2 border-0 rounded-0 bg-transparent text-primary"
            >
              <FaCamera color="#ba2cde" />
            </button>
            <button
              type="button"
              className="mx-2 border-0 rounded-0 bg-transparent text-primary"
              onClick={() => setIsListening((prevState) => !prevState)}
            >
               {!isListening && (
              <FaMicrophoneSlash color="#ba2cde" style={{fontSize:"19px"}}/>
                   
              )}
              {isListening && (
              <FaMicrophone color="#ba2cde" style={{fontSize:"19px"}}/>
              )}
            </button>
          </div>


        {/*  cart */}
        <div className="h-full px-1 w-20 flex flex-row justify-center items-center">
          <small
            className="text-purple-900"
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            {basket?.length}
          </small>
          <Link to="/cart" className="text-decoration-none flex justify-center items-center" >
            <button
              type="button"
              className="border-0 animation text-md px-1"
            >
              <FaShoppingCart className="text-xl text-purple-900" />
            </button>
          </Link>
        </div>
        <div className="w-16 border-l border-gray-400 h-full sm:hidden flex justify-center items-center">
              <ToggleButton />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
