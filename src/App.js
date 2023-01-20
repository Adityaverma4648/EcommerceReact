import React from 'react';
import "../src/App.css";
import {BrowserRouter , Route, Switch} from "react-router-dom";
import Header from "./components/Header.js"
import Sidebar from './components/Sidebar.js';
import Explore from "./components/Explore.js";

const App = () => {
  const handleSearch=()=>{

  }
  return (
     <BrowserRouter>
          <Header search={handleSearch} />      
          <Sidebar />
     </BrowserRouter>
  )
}

export default App