import React from "react";
import './App.css';
import { Link, NavLink } from "react-router-dom";
import RotatingImage from "./RotatingImage";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
              <div className="nav-img">
              <RotatingImage/>
              </div>
                <NavLink className="navbar-brand" to="/">Tech-Subh</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="active-link" className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="active-link" className="nav-link" to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="active-link" className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <Link to="/service">
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </Link>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
