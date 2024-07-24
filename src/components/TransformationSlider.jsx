import React, { useState, useRef, useEffect } from "react";
import beforeImage from "../assets/6O9A2315.jpg";
import afterImage from "../assets/landingSectionImg.jpg";

import "./TransformationSlider.css";

const TransformationSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    let newSliderPosition =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    if (newSliderPosition < 0) newSliderPosition = 0;
    if (newSliderPosition > 100) newSliderPosition = 100;
    setSliderPosition(newSliderPosition);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="transformation-slider" ref={containerRef}>
      <div
        className="image-container before"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img src={beforeImage} alt="Before" />
      </div>
      <div
        className="image-container after"
        style={{
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
        }}
      >
        <img src={afterImage} alt="After" />
      </div>
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-handle"></div>
      </div>
    </div>
  );
};

export default TransformationSlider;
