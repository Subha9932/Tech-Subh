import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import img from "../src/img1.svg";
import { Link } from "react-router-dom";
const About=()=>{
return(
    <>
     <div id="home">
    <div className="container-fluid d-flex align-items-center">
    <div className="row-6 align-items-center" >
<div className="header">
    <h1>Welcome to About page</h1>
    <span className="subh">Tech-Subh</span>
</div>
<div className="det">
   Here we go to new World.........
</div>
<Link to="/contact">
<button className="btn btn-primary" id="btn">Contact-Now</button>
</Link>
</div>
 <div className="row-6 d-flex align-items-center">
 <div className="pic" >
<img src={img} alt="About img" className="img"></img>
 </div> 
 </div>
    </div>
    <div className="home1">
        ©️Copyright-2023
      </div>
    </div>
    </>
);
};
export default About;