import "./Discount.css";

const PermanentDiscount = () => {
  return (
    <div className="pdWrap">
      <div className="pdCont">
        <span style={{ color: "red", fontWeight: "700" }}>60% OFF</span>
        <span>on</span>
        <span>90 DAYS</span>
        <span>BODY TRANSFORMATION PROGRAM</span>
      </div>
      <div className="pdTime">
        <p>
          27d 17h 15m 9s <span style={{ color: "black" }}>left</span>
        </p>
        {/* <button>Check </button> */}
      </div>
    </div>
  );
};

export default PermanentDiscount;
