import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import beforeImage from "../assets/6O9A2315.jpg";
import afterImage from "../assets/landingSectionImg.jpg";

import "./TransformationSlider.css";

const TransformationSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    let newSliderPosition =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    if (newSliderPosition < 0) newSliderPosition = 0;
    if (newSliderPosition > 100) newSliderPosition = 100;
    setSliderPosition(newSliderPosition);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove);
  };

  return (
    <div className="transformation-slider" ref={containerRef}>
      <motion.div
        className="image-container before"
        initial={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
        animate={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
        transition={{ duration: 0.1 }}
      >
        <img src={beforeImage} alt="Before" />
      </motion.div>
      <motion.div
        className="image-container after"
        initial={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
        animate={{
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
        }}
        transition={{ duration: 0.1 }}
      >
        <img src={afterImage} alt="After" />
      </motion.div>
      <motion.div
        className="slider"
        ref={sliderRef}
        initial={{ x: "50%" }}
        animate={{ x: `${sliderPosition}%` }}
        transition={{ duration: 0.1 }}
        onMouseDown={handleMouseDown}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-handle"></div>
      </motion.div>
    </div>
  );
};

export default TransformationSlider;
