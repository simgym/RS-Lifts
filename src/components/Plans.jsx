import React, { useState, useEffect, useRef } from "react";
import beforeImage from "../assets/6O9A2315.jpg";
import superBeginning from "../assets/superBeginning.jpg";
import superBulk from "../assets/superBulk.jpg";
import superShred from "../assets/superShred.jpg";
import consultImg from "../assets/consult.jpg";
import consultImg1 from "../assets/consult1.jpg";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Plans.css";

const Plans = () => {
  const topPlans = [
    {
      name: "BEGINNING",
      services: ["Build Foundation", "Master Basics", "Start Strong"],
      img: superBeginning,
      desc: "8-week STRONG FOUNDATION plan to kickstart your fitness journey",
      url: "/home/plan/superplans/superbeginning",
    },
    {
      name: "SHRED",
      services: [
        "Enhance Definition",
        "Build Lean Muscles",
        "Overcome Plateaus",
      ],
      img: superShred,
      desc: "12-week PROGRESSIVELY INTENSE program to get a shredded and lean body",
      url: "/home/plan/superplans/supershred",
    },
    {
      name: "BULK",
      services: ["Build Muscles", "Build Strength", "Elevate Performance"],
      img: superBulk,
      desc: "12-week ESCALATING INTENSITY plan to build muscle and gain strength",
      url: "/home/plan/superplans/superbulk",
    },
  ];

  const bottomPlans = [
    {
      name: "VIDEO/VOICE CONSULTATION",
      desc: "30 Minutes Video Consultation with Rohit",
      img: consultImg,
      url: "/home/plan/videoconsultation",
    },
    {
      name: "ONE TO ONE PERSONAL TRAINING",
      desc: "Online Live one-to-one Personal Training Sessions",
      img: consultImg1,
      url: "/home/plan/onlinept",
    },
  ];

  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [animationClass, setAnimationClass] = useState("");

  const topSliderRef = useRef(null);

  // Handle screen resize to detect small screens
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle touch events and automatic slide change
  useEffect(() => {
    const topSlider = topSliderRef.current;

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
      } else if (endX - startX > 50) {
        handleTopPrev();
      }
    };

    if (topSlider) {
      topSlider.addEventListener("touchstart", handleTouchStart);
      topSlider.addEventListener("touchmove", handleTouchMove);
      topSlider.addEventListener("touchend", handleTouchEnd);
    }

    // Auto-slide to the next plan every 7 seconds
    const timer = setTimeout(() => {
      setCurrentTopIndex((prev) => (prev + 1) % topPlans.length);
    }, 7000);

    return () => {
      if (topSlider) {
        topSlider.removeEventListener("touchstart", handleTouchStart);
        topSlider.removeEventListener("touchmove", handleTouchMove);
        topSlider.removeEventListener("touchend", handleTouchEnd);
      }
      clearTimeout(timer);
    };
  }, [currentTopIndex]);

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

  return (
    <div className="plansWrap">
      <div className="onlineSessions">{/* <h2>ONLINE GUIDE</h2> */}</div>

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
                    <Link to={topPlans[currentTopIndex].url}>Check</Link>
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
                    <Link to={item.url}>Check</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottomPlansWrap">
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
                  <Link to={item.url}>Check</Link>
                </div>
              </span>
              <span className="bottomPlanImg">
                <img src={item.img} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
