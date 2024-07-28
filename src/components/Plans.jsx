import React, { useState, useEffect, useRef } from "react";
import beforeImage from "../assets/6O9A2315.jpg";
import consultImg from "../assets/consult.jpg";
import { FaCircle } from "react-icons/fa";
import "./Plans.css";

const Plans = () => {
  const topPlans = [
    {
      name: "BEGINNING",
      services: ["Build Foundation", "Master Basics", "Start Strong"],
      img: beforeImage,
      desc: "8-week STRONG FOUNDATION plan to kickstart your fitness journey",
    },
    {
      name: "SHRED",
      services: [
        "Enhance Definition",
        "Build Lean Muscles",
        "Overcome Plateaus",
      ],
      img: beforeImage,
      desc: "12-week PROGRESSIVELY INTENSE program to shred fat and get lean",
    },
    {
      name: "BULK",
      services: ["Build Muscles", "Build Strength", "Elevate Performance"],
      img: beforeImage,
      desc: "12-week ESCALATING INTENSITY plan to build muscle and gain strength",
    },
  ];

  const bottomPlans = [
    {
      name: "VIDEO/VOICE CONSULTATION",
      desc: "30 Minutes Video Consultation with Rohit",
      img: consultImg,
    },
    {
      name: "ONE TO ONE PERSONAL TRAINING",
      desc: "Online Live Transformation Video on Video Call",
      img: consultImg,
    },
  ];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const topSlider = topSliderRef.current;
    const bottomSlider = bottomSliderRef.current;

    let startX, endX;

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      endX = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (startX - endX > 50) {
        handleTopNext();
        handleBottomNext();
      } else if (endX - startX > 50) {
        handleTopPrev();
        handleBottomPrev();
      }
    };

    if (topSlider) {
      topSlider.addEventListener("touchstart", handleTouchStart);
      topSlider.addEventListener("touchmove", handleTouchMove);
      topSlider.addEventListener("touchend", handleTouchEnd);
    }

    if (bottomSlider) {
      bottomSlider.addEventListener("touchstart", handleTouchStart);
      bottomSlider.addEventListener("touchmove", handleTouchMove);
      bottomSlider.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (topSlider) {
        topSlider.removeEventListener("touchstart", handleTouchStart);
        topSlider.removeEventListener("touchmove", handleTouchMove);
        topSlider.removeEventListener("touchend", handleTouchEnd);
      }
      if (bottomSlider) {
        bottomSlider.removeEventListener("touchstart", handleTouchStart);
        bottomSlider.removeEventListener("touchmove", handleTouchMove);
        bottomSlider.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentTopIndex, currentBottomIndex]);

  const handleTopPrev = () => {
    setCurrentTopIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
    console.log(currentTopIndex);
  };

  const handleTopNext = () => {
    setCurrentTopIndex((prevIndex) =>
      prevIndex < topPlans.length - 1 ? prevIndex + 1 : prevIndex
    );
    console.log(currentTopIndex);
  };

  const handleBottomPrev = () => {
    setCurrentBottomIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleBottomNext = () => {
    setCurrentBottomIndex((prevIndex) =>
      prevIndex < bottomPlans.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="plansWrap">
      <div className="onlineSessions">
        <h2>ONLINE GUIDE</h2>
      </div>
      <div className="bottomPlansWrap" ref={bottomSliderRef}>
        {isSmallScreen ? (
          <div className="sliderContainer">
            <div className="bottomplanSlider">
              <div className="bottomPlan">
                <div className="bottomPlanName">
                  <p>{bottomPlans[currentBottomIndex].name}</p>
                </div>
                <div className="bottomPlanFoot">
                  <span className="bottomPlanDescButton">
                    <div className="bottomPlanDesc">
                      <p>{bottomPlans[currentBottomIndex].desc}</p>
                    </div>
                    <div className="bottomPlanButton">
                      <button>Check</button>
                    </div>
                  </span>
                  <span className="bottomPlanImg">
                    <img src={bottomPlans[currentBottomIndex].img} />
                  </span>
                </div>
              </div>
            </div>
            <div className="planInd">
              <span
                className={
                  currentBottomIndex == 0 ? "leftBottomInd" : "normInd"
                }
              >
                <FaCircle />
              </span>
              <span
                className={
                  currentBottomIndex == 1 ? "rightBottomInd" : "normInd"
                }
              >
                <FaCircle />
              </span>
            </div>
          </div>
        ) : (
          <div className="plansContainer">
            {bottomPlans.map((item, index) => (
              <div className="bottomPlan" key={index}>
                <div className="bottomPlanName">
                  <p>{item.name}</p>
                </div>
                <div className="bottomPlanFoot">
                  <span className="bottomPlanDescButton">
                    <div className="bottomPlanDesc">
                      <p>{item.desc}</p>
                    </div>
                    <div className="bottomPlanButton">
                      <button>Check</button>
                    </div>
                  </span>
                  <span className="bottomPlanImg">
                    <img src={item.img} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="superPlans">
        <h2>SUPER PLANS</h2>
      </div>
      <div className="topPlansWrap" ref={topSliderRef}>
        {isSmallScreen ? (
          <div className="sliderContainer">
            <div className="topPlanSlider">
              <div
                className={`${
                  topPlans[currentTopIndex].name === "SHRED"
                    ? "shreadPlan"
                    : topPlans[currentTopIndex].name === "BEGINNING"
                    ? "beginningPlan"
                    : "otherPlan"
                }`}
              >
                <div className="topPlanHead">
                  <div className="topPlanName">
                    <p>SUPER {topPlans[currentTopIndex].name}</p>
                  </div>
                  <div className="topPlanServicesImg">
                    <div className="topPlanServices">
                      {topPlans[currentTopIndex].services.map(
                        (service, ind) => (
                          <p key={ind}>{service}</p>
                        )
                      )}
                    </div>
                    <div className="topPlanImg">
                      <img src={topPlans[currentTopIndex].img} />
                    </div>
                  </div>
                </div>
                <div className="topPlanFoot">
                  <div className="topPlanDesc">
                    <p>{topPlans[currentTopIndex].desc}</p>
                  </div>
                  <div className="topPlanButton">
                    <button>Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="planInd">
              <span className={currentTopIndex == 0 ? "leftTopInd" : "normInd"}>
                <FaCircle />
              </span>
              <span className={currentTopIndex == 1 ? "midTopInd" : "normInd"}>
                <FaCircle />
              </span>
              <span
                className={currentTopIndex == 2 ? "rightTopInd" : "normInd"}
              >
                <FaCircle />
              </span>
            </div>
          </div>
        ) : (
          <div className="plansContainer">
            {topPlans.map((item, index) => (
              <div
                className={`${
                  item.name === "SHRED"
                    ? "shreadPlan"
                    : item.name === "BEGINNING"
                    ? "beginningPlan"
                    : "otherPlan"
                }`}
                key={index}
              >
                <div className="topPlanHead">
                  <div className="topPlanName">
                    <p>SUPER {item.name}</p>
                  </div>
                  <div className="topPlanServicesImg">
                    <div className="topPlanServices">
                      {item.services.map((service, ind) => (
                        <p key={ind}>{service}</p>
                      ))}
                    </div>
                    <div className="topPlanImg">
                      <img src={item.img} />
                    </div>
                  </div>
                </div>
                <div className="topPlanFoot">
                  <div className="topPlanDesc">
                    <p>{item.desc}</p>
                  </div>
                  <div className="topPlanButton">
                    <button>Check</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;
