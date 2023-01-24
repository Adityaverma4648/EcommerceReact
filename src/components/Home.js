import React from "react";
import { Link } from "react-router-dom";
import { FaCompass } from "react-icons/fa";

const Home = () => {
  return (
    <div className="CompContainer">
      <div className="welcomeHomeCont container-fluid bg-light my-4 d-flex flex-column align-items-center justify-content-center py-4">
        <h5>Welcome to the latest E-commerce website in 2023</h5>
        <div className="py-2 welcomeHomeButtonCont d-flex justify-content-evenly align-items-center">
          <Link to="/explore">
            <button type="button" className="btn btn-primary">
              <FaCompass className="me-1" />
              Explore
            </button>
          </Link>
          <Link to="/signUp">
            <button type="button" className="btn btn-primary">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
