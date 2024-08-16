import React, { useState, useEffect } from "react";
import coachImg from "../assets/coach.jpg";
import coach1 from "../assets/coach1a.jpg";
import coach2 from "../assets/coach2a.jpg";
import coach3 from "../assets/coach3a.jpg";
import { RiInstagramLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import "./CoachSection.css";

const CoachSection = () => {
  const [currentImage, setCurrentImage] = useState(coachImg);

  useEffect(() => {
    const images = [coachImg, coach1, coach2, coach3];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    instagram: "",
    whatsapp: "",
    youtube: "",
  };

  return (
    <div className="coach-container">
      <div className="coach-inner">
        <div className="coach-title">
          <h2>Meet Your Coach</h2>
        </div>
        <div className="coach-details">
          <div className="coach-imgDesc">
            <div className="coach-image-container">
              <img src={currentImage} className="coach-image" alt="Coach" />
            </div>
            <div className="coach-description">
              <p>
                <span className="coach-name"> Rohit Sharma</span> is a certified
                fitness trainer and certified CrossFit trainer with
                <span> 18+ years</span> of coaching experience & has trained
                over <span>25,000 clients</span> offline and online in the
                fitness industry. He has also won many titles in bodybuilding
                and men’s physique fitness model categories, including Mr. Delhi
                1st Place Bodybuilding, Mr. YMCA 3rd in 2013, Bodypower India
                Men’s Physique (Top 5 Overall India) in 2015, and Mr. India
                Jerai Classic Physique, Top 3 Overall India in 2017.
              </p>
            </div>
          </div>
          <div className="coach-learn-Social">
            {" "}
            <div className="coach-social-icons">
              <a
                href={data.instagram}
                target="_blank"
                className="coach-social-link"
                rel="noopener noreferrer"
              >
                <RiInstagramLine />
              </a>
              <a
                href={`https://wa.me/${data.whatsapp}?text=Hello,%20Rohit%20Sharma`}
                target="_blank"
                className="coach-social-link"
                rel="noopener noreferrer"
              >
                <RiWhatsappLine />
              </a>
              <a
                href={data.youtube}
                target="_blank"
                className="coach-social-link"
                rel="noopener noreferrer"
              >
                <RiYoutubeFill />
              </a>
            </div>
            <div className="coach-learn-more">
              <a className="coach-learn-more-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachSection;
