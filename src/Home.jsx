import React from "react";
import { Link } from "react-router-dom"; // You should use Link to navigate

import img from "../src/img2.svg";

const Home = () => {
  return (
    <div id="home">
    <div className="container-fluid d-flex align-items-center">
      <div className="row-6 align-items-center">
        <div className="header">
          <h1>Let's learn new Tech With</h1>
          <span className="subh">Tech-Subh</span>
        </div>
        <div className="det">From here we go to a new world.........</div>
        <Link to="/service">
          <button variant="outline-primary" id="btn">
            Get Started
          </button>
        </Link>
      </div>
      <div className="row-6 d-flex align-items-center">
        <div className="pic">
          <img src={img} alt="home img" className="img" />
        </div>
      </div>
      </div>
      <div className="home1">
        ©️Copyright-2023
      </div>
    </div>
  );
};

export default Home;
