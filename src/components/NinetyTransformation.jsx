import { useEffect, useState } from "react";
import TransformationSlider from "./TransformationSlider";
import beforeImage from "../assets/beforeTransformation.jpeg";
import afterImage from "../assets/afterTransformation3.jpeg";
import { Link } from "react-router-dom";
import "./NinetyTransformation.css";

const NinetyTransformation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="tfSectionWrapper">
      {/* <div className="tfDisc">
        <p>60% OFF</p>
      </div> */}
      {!isSmallScreen && (
        <div className="tfWrap">
          <div className="tfSectionCont">
            <span className="tfSecHead">
              <h2>
                <span>90 DAYS</span> ONLINE TRANSFORMATION PROGRAM
              </h2>
            </span>
            <span className="tfSecQuote">
              <p>
                Join our 90 Days Body Transformation Program and achieve your
                fitness goals with personalized online coaching by Rohit Sharma.
                This program offers custom exercise plans and tailored nutrition
                guidance to help you reduce fat, build muscle, and improve
                posture and metabolism. Start your journey today and unlock your
                full potential!
              </p>
            </span>

            <span className="tfSecButton">
              <Link to="/home/plan/90+day+online+transformation+program">
                Check Now
              </Link>
            </span>
          </div>
          <div className="tfSectionImg">
            <TransformationSlider />
          </div>
        </div>
      )}
      {isSmallScreen && (
        <div className="tfWrap">
          <div className="tfSectionCont">
            <span className="tfSecHead">
              <h2>
                <span className="daysSpan">90 DAYS</span> ONLINE TRANSFORMATION
                PROGRAM
              </h2>
            </span>
            <div className="tfFoot">
              <div className="tfQuoteButton">
                {" "}
                <span className="tfSecQuote">
                  <p>
                    Join our 90 Days Body Transformation Program and achieve
                    your fitness goals with personalized online coaching by
                    Rohit Sharma. This program offers custom exercise plans and
                    tailored nutrition guidance to help you reduce fat, build
                    muscle, and improve posture and metabolism. Start your
                    journey today and unlock your full potential!
                  </p>
                </span>
                <span className="tfSecButton">
                  <Link to="/home/plan/90+day+online+transformation+program">
                    Check Now
                  </Link>
                </span>
              </div>
              <div className="tfSectionImg">
                <TransformationSlider />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NinetyTransformation;
