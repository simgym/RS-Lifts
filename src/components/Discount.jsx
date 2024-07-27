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
      </div>
      <div className="dsCont">
        <h2>
          <span style={{ color: "red", fontSize: "1.8rem" }}>90 DAYS</span> BODY
          TRANSFORMATION PROGRAM
        </h2>
        <div className="dsTimeCont">
          <p className="dsTime">
            27d 17h 15m 9s <span style={{ color: "black" }}>Left</span>
          </p>
          <p className="hurry">HURRY UP !!</p>
        </div>
      </div>
      <div className="dsButton">
        <button onClick={() => setShowDiscount(false)}>Close</button>
        <button>Check Now</button>
      </div>
    </div>
  );
};

export default Discount;
