import React from "react";
import './App.css';
import pic from "../src/img1.png";
import { Link } from "react-router-dom";
const Card=(props)=>{
    return (
        <>
          <div class="card">
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div class="card-body" id="card-text">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    </div>
<Link to ="/contact">    <div class="card-btn">
    <a href="#" class="btn btn-primary">Learning...</a>
  </div>
  </Link>
</div>
        </>
    );
};
export default Card;