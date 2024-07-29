import TransformationSlider from "./TransformationSlider";
import "./NinetyTransformation.css";
import { useEffect, useState } from "react";

const NinetyTransformation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="tfSectionWrapper">
      <div className="tfSectionCont">
        {isSmallScreen && (
          <span className="tfSecDiscount">
            <h3>
              FLAT
              <span style={{ color: "#4882ee", fontSize: " 2.5rem" }}>
                {" "}
                60%{" "}
              </span>{" "}
              OFF
            </h3>
          </span>
        )}
        <span className="tfSecHead">
          <h2>
            <span style={{ color: "rgba(0, 0, 0, 0.785)" }}>90 DAYS</span> BODY
            TRANSFORMATION PROGRAM
          </h2>
        </span>
        <span className="tfSecQuote">
          <p>
            Join our 90 Days Body Transformation Program and achieve your
            fitness goals with personalized online coaching by Rohit Sharma.
            This program offers custom exercise plans and tailored nutrition
            guidance to help you reduce fat, build muscle, and improve posture
            and metabolism. Experience continuous support and motivation to stay
            on track and transform your body and health. Start your journey
            today and unlock your full potential!
          </p>
        </span>
        <span className="tfSecButton">
          <button>Check Now</button>
        </span>
      </div>
      {/* {!isSmallScreen && (
        <span className="tfSecDiscountBig">
          <h3>
            FLAT
            <span style={{ color: "#4882ee", fontSize: " 2.5rem" }}>
              {" "}
              60%{" "}
            </span>{" "}
            OFF
          </h3>
        </span>
      )} */}
      <div className="tfSectionImg">
        <TransformationSlider />
      </div>
    </div>
  );
};

export default NinetyTransformation;
