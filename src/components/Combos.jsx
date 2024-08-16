import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import superBeginning from "../assets/superBeginning.jpg";
import superBulk from "../assets/superBulk.jpg";
import superShred from "../assets/superShred.jpg";
import { FaCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import "./Combos.css";

const Combos = () => {
  const topPlans = [
    {
      services: ["SUPER BEGINNING", "SUPER SHRED"],
      img1: superBeginning,
      img2: superShred,
      desc: "20-week STRONG FOUNDATION plan to build a strong foundation and shred fat for a leaner, stronger you",
      url: "/home/plan/combo/beginning+shred",
    },
    {
      services: ["SUPER BEGINNING", "SUPER BULK"],
      img1: superBeginning,
      img2: superBulk,
      desc: "20-week PROGRESSIVELY INTENSE program to kickstart your journey, build muscle, and gain strength",
      url: "/home/plan/combo/beginning+bulk",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const sliderRef = useRef(null);

  // Effect to handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to handle touch events for swiping on the slider
  useEffect(() => {
    const slider = sliderRef.current;

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

    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      slider.addEventListener("touchend", handleTouchEnd);
    }

    // Auto-slide to the next plan every 7 seconds
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % topPlans.length);
    }, 7000);

    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
        slider.removeEventListener("touchend", handleTouchEnd);
      }
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const handleTopPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    console.log(currentIndex);
  };

  const handleTopNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < topPlans.length - 1 ? prevIndex + 1 : prevIndex
    );
    console.log(currentIndex);
  };

  return (
    <div className="plansWrap">
      {isSmallScreen && (
        <div className="superPlans">
          <h2>COMBO OFFERS</h2>
          <p>
            <span className="thirtyOff">30%</span> off
          </p>
        </div>
      )}
      {!isSmallScreen && (
        <div className="superPlans">
          <h2>
            COMBO OFFERS - <span className="thirtyOff">30%</span> off
          </h2>
        </div>
      )}
      <div className="comboWrap">
        {!isSmallScreen &&
          topPlans.map((item, index) => (
            <div className="comboPlan" key={index}>
              <div className="comboHead">
                <div className="comboServicesImg">
                  <div className="comboImg">
                    <img src={item.img1} />
                    <div className="overlay">
                      <p>{item.services[0]}</p>
                    </div>
                  </div>
                  <span>
                    <IoMdAdd />
                  </span>
                  <div className="comboImg">
                    <img src={item.img2} />
                    <div className="overlay">
                      <p>{item.services[1]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comboFoot">
                <div className="comboDesc">
                  <span>{item.desc}</span>
                </div>
                <div className="comboButton">
                  <Link to={item.url}>Check</Link>
                </div>
              </div>
            </div>
          ))}
        {isSmallScreen && (
          <div className="sliderContainer" ref={sliderRef}>
            <div className="topPlanSlider">
              <div className="comboPlan">
                <div className="comboHead">
                  <div className="comboServicesImg">
                    <div className="comboImg">
                      <img src={topPlans[currentIndex].img1} />
                      <div className="overlay">
                        <p>{topPlans[currentIndex].services[0]}</p>
                      </div>
                    </div>
                    <span>
                      <IoMdAdd />
                    </span>
                    <div className="comboImg">
                      <img src={topPlans[currentIndex].img2} />
                      <div className="overlay">
                        <p>{topPlans[currentIndex].services[1]}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comboFoot">
                  <div className="comboDesc">
                    <p>{topPlans[currentIndex].desc}</p>
                  </div>
                  <div className="comboButton">
                    <Link to={topPlans[currentIndex].url}>Check</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="planInd">
              <span className={currentIndex === 0 ? "" : "normInd"}>
                <FaCircle />
              </span>
              <span className={currentIndex === 1 ? "" : "normInd"}>
                <FaCircle />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Combos;
