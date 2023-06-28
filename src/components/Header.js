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
  const [selected, setSelected] = useState("all");

  const [{ basket, user }, dispatch] = useStateValue();
  

  useEffect(() => {
    if (note !== null) {
      setInput(note);
      handleSearch(note);
    }
  }, [note,handleSearch,setInput]);
    
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

  const handleCategoryChange = (e) =>{ 
    setSelected(e.target.value);
    navigate("/products");
  }
  useEffect(()=>{
     handleSearch(selected);
  },[selected])

  return (
    <div className="h-16 shadow-sm bg-white flex w-screen justify-center items-center z-50" >
      <div className="w-20 flex items-center justify-center">
          <Link to="/" className="text-indigo-500 text-decoration-none text-lg font-bold" >
            Shopzy
          </Link>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-full w-full px-2 d-flex justify-end items-center">
          {/* search form */}
          <div className="h-8/12 w-6/12 hidden md:flex justify-end items-center text-primary rounded-md">
             <select name="Category" className="w-20 h-10 bg-red-300 text-decoration-none text-purlpe-600 bg-transparent rounded-lg text-end" onChange={(e)=>{handleCategoryChange(e)}} >
                <option value="all" className="text-purple-600 text-decoration-none" >all</option>
                <option value="bag" className="text-purple-600 text-decoration-none" >bags</option>
                <option value="clothing" className="text-purple-600 text-decoration-none" >clothings</option>
                <option value="sport" className="text-purple-600 text-decoration-none" >sports</option>
                <option value="television" className="text-purple-600 text-decoration-none" >televisions</option>
             </select>
             <div className="p-2" >
             <FaSearch className="mx-1 text-blue-600"    />
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
          <div className=" h-full hidden md:flex justify-center items-center">
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
          </div>


        {/*  cart */}
        <div className="h-10/12 p-1 w-20 rounded-lg flex flex-row justify-center items-center ">
          <small
            className="text-red-600"
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            {basket?.length}
          </small>
          <Link to="/cart" className="text-decoration-none flex justify-center items-center" >
            <button
              type="button"
              className="border-0 animation text-md px-1 "
            >
              <FaShoppingCart className="text-xl text-red-600" />
            </button>
          </Link>
        </div>
        <div className="w-16 h-full flex justify-center items-center text-blue-900">
              <ToggleButton />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
