import React from "react";
import "./Discount.css";

const Discount = ({ setShowDiscount }) => {
  return (
    <div className="dsWrap">
      <div className="dsHead">
        <h3>
          FLAT
          <span className="dsAmt"> 60% </span> OFF
        </h3>
        <p>Grab Now</p>
      </div>
      <div className="dsCont">
        <h2>
          <span style={{ color: "red", fontSize: "1.7rem" }}>90 DAYS</span> BODY
          TRANSFORMATION PROGRAM
        </h2>
        <div className="dsTimeCont">
          <p className="dsTime">
            27d 17h 15m 9s <span style={{ color: "black" }}>left</span>
          </p>
          <p className="hurry">HURRY UP !!</p>
        </div>
      </div>
      <div className="dsButton">
        <a onClick={() => setShowDiscount(false)}>Close</a>
        <a>Check Now</a>
      </div>
    </div>
  );
};

export default Discount;
