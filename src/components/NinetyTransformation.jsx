import { useEffect, useState } from "react";
import beforeImage from "../assets/beforeTransformation2.jpeg";
import afterImage from "../assets/afterTransformation4.jpeg";
import { Link } from "react-router-dom";
import "./NinetyTransformation.css";

const NinetyTransformation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 550);
  const [isTabScreen, setIsTabScreen] = useState(window.innerWidth <= 768);

  // Handle screen resize to detect small screens
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
      setIsTabScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderImages = () => (
    <div className="tfSectionImg">
      <div className="beforeImg">
        <img src={beforeImage} />
        <div className="ninetyOverlay">
          <p>Before</p>
        </div>
      </div>
      <div className="afterImg">
        <img src={afterImage} />
        <div className="ninetyOverlay">
          <p>After</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="tfSectionWrapper">
      {!isSmallScreen && (
        <div className="tfWrap">
          <div className="tfSectionCont">
            <span className="tfSecHead">
              <h2>
                <span>90 DAYS</span> ONLINE BODY TRANSFORMATION PROGRAM
              </h2>
            </span>
            <span className="tfSecQuote">
              <p>
                Join our 90 Days Body Transformation Program, led by expert
                fitness coach Rohit Sharma, and pursue your fitness goals with
                personalized online coaching. Rohit will create custom exercise
                plans and tailored nutrition guidance to help you reduce fat,
                build muscle, and improve posture and metabolism, whether you
                focus on one goal or a combination. Start your journey today
                with Rohit’s expert training and unlock your full potential!
              </p>
            </span>

            <span className="tfSecButton">
              <Link to="/home/plan/90+day+online+transformation+program">
                Join Now
              </Link>
            </span>
          </div>
          {renderImages()}
        </div>
      )}
      {isSmallScreen && (
        <div className="tfWrap">
          <div className="tfSectionCont">
            <span className="tfSecHead">
              <h2>
                <span className="daysSpan">90 DAYS</span> ONLINE BODY
                TRANSFORMATION PROGRAM
              </h2>
            </span>
            <div className="tfFoot">
              <div className="tfQuoteButton">
                <span className="tfSecQuote">
                  <p>
                    Join our 90 Days Body Transformation Program, led by expert
                    fitness coach Rohit Sharma, and pursue your fitness goals
                    with personalized online coaching. Rohit will create custom
                    exercise plans and tailored nutrition guidance to help you
                    reduce fat, build muscle, and improve posture and
                    metabolism, whether you focus on one goal or a combination.
                    Start your journey today with Rohit’s expert training and
                    unlock your full potential!
                  </p>
                </span>
                <span className="tfSecButton">
                  <Link to="/home/plan/90+day+online+transformation+program">
                    Join Now
                  </Link>
                </span>
              </div>
              {renderImages()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NinetyTransformation;
