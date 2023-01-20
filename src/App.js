import React from "react";
import "../src/App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Explore from "./components/Explore.js";
import Home from "./components/Home";
const App = () => {
  const handleSearch = () => {};
  return (
    <>
      <BrowserRouter>
        <Header search={handleSearch} />
        <div className="d-flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={Home}></Route>
            <Route path="/explore" element={Explore}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
