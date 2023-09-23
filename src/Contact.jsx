import React from "react";
import "./App.css";
import cont from "../src/contact.svg";
const whatsapp=()=>{
  var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    
    var url = "https://wa.me/9932876978?text="
    +"*Name :* "+Name+"%0a"
    +"*Email :* "+Email+"%0a"
    
    window.open(url,'_blank').focus();
    }
    
const Contact = () => {
  return (
    <div className="contact-container">
    <div className="contact-head">
    <div className="waviy" id="contat-head">
          <span style={{ "--i": 1 }}>C</span>
          <span style={{ "--i": 2 }}>o</span>
          <span style={{ "--i": 3 }}>n</span>
          <span style={{ "--i": 4 }}>t</span>
          <span style={{ "--i": 5 }}>a</span>
          <span style={{ "--i": 6 }}>c</span>
          <span style={{ "--i": 7 }}>t</span>
          <span style={{ "--i": 8 }}>-</span>
          <span style={{ "--i": 9 }}>U</span>
          <span style={{ "--i": 10 }}>s</span>
          </div>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" id="Name"/>
        <input type="email" placeholder="Your Email" id="Email" />
        <textarea placeholder="Your Message"></textarea>
        <button className="submit-contact" onClick={whatsapp}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
