import React from "react";
import Card from "./Card";
import Sdata from "./Sdata"; // Make sure Sdata contains the data you want to display
import './App.css';

const Service = () => {
  return (
    <>
      <div className="ser-header">
          <div className="waviy">
          <span style={{ "--i": 1 }}>O</span>
          <span style={{ "--i": 2 }}>u</span>
          <span style={{ "--i": 3 }}>r</span>
          <span style={{ "--i": 4 }}>-</span>
          <span style={{ "--i": 5 }}>S</span>
          <span style={{ "--i": 6 }}>e</span>
          <span style={{ "--i": 7 }}>r</span>
          <span style={{ "--i": 8 }}>v</span>
          <span style={{ "--i": 9 }}>i</span>
          <span style={{ "--i": 10 }}>c</span>
          <span style={{ "--i": 10 }}>e</span>
          <span style={{ "--i": 10 }}>s</span>
        </div>
      </div>
      <div className="container-fluid nav_bg" id="ser">
        <div className="row d-flex">
          <div className="col-12" id="card">
            {Sdata.map((val, ind) => {
              return <Card key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
