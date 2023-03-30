import React, { useState, useEffect ,history } from "react";
import { useStateValue } from "../redux/StateProvider";
import {
  FaCamera,
  FaMicrophone,
  FaSearch,
  FaShoppingCart,
  FaMicrophoneSlash
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Header = ({ search }) => {

  const [isListening, setIsListening] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [note, setNote] = useState(null);

  const [{ basket, user }, dispatch] = useStateValue();
  

  useEffect(() => {
    if (note !== null) {
      setInput(note);
      search(note);
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
      history.push("/products/all");
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };

  };
  const handleChange = (event) => {
    event.preventDefault();
    setNote(event.target.value);
  };


  return (
    <div className="Header" >
      <div className="w-20 flex items-center justify-center">
          <Link to="/" className="text-black text-decoration-none font-semibold" >LOGO</Link>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-full w-full px-2 d-flex justify-end items-center ">
          {/* search form */}
          <div className="h-8/12 flex justify-end items-center text-primary rounded-full border-r border-gray-900">
            <FaSearch className="mx-1" />
            <input
              type="text"
              name="Search"
              id="Search"
              onChange={(e)=>handleChange(e)}
              value={note}
              className="w-3/4 bg-transparent p-2 text-gray-900"
              placeholder="Search"
            />
            
          </div>

          {/* Search Icons  */}
          <div className=" h-full flex justify-center items-center">
            <button
              type="button"
              className="mx-2 border-0 rounded-0 bg-transparent text-primary"
            >
              <FaCamera />
            </button>
            <button
              type="button"
              className="mx-2 border-0 rounded-0 bg-transparent text-primary"
              onClick={() => setIsListening((prevState) => !prevState)}
            >
               {!isListening && (
              <FaMicrophoneSlash style={{fontSize:"19px"}}/>
                   
              )}
              {isListening && (
              <FaMicrophone style={{fontSize:"19px"}}/>
              )}
            </button>
          </div>


        {/*  cart */}
        <div className="h-full px-1 w-20 flex flex-row justify-center items-center">
          <small
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            {basket?.length}
          </small>
          <Link to="/cart" className="text-decoration-none flex justify-center items-center" >
            <button
              type="button"
              className="border-0 animation text-md px-1"
            >
              <FaShoppingCart className="text-black text-xl" />
            </button>
          </Link>
        </div>
        <div className="w-10 border-l border-gray-400 h-full sm:hidden flex justify-center items-center">
              <ToggleButton />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
