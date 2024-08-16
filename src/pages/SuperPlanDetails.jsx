import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import "./SuperPlanDetails.css";

const SuperPlanDetails = ({ details }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showImg, setShowImg] = useState(true);
  const [showVid, setShowVid] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const sliderRef = useRef(null);
  const mediaCount = details.media.filter(Boolean).length;

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        handleNextMedia();
      } else if (endX - startX > 50) {
        handlePrevMedia();
      }
    };

    if (slider && isSmallScreen) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      slider.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
        slider.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isSmallScreen]);

  const handleNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaCount);
  };

  const handlePrevMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? mediaCount - 1 : prevIndex - 1
    );
  };

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sdWrap">
      <div className="sdHead">
        <div className="sdImg" ref={sliderRef}>
          <div className="sdSelectedImgWrap">
            <div className="sdSelectedMedia">
              {isSmallScreen ? (
                <>
                  {currentMediaIndex === 0 && details.media[0] && (
                    <img src={details.media[0]} alt={details.title} />
                  )}
                  {currentMediaIndex === 1 && details.media[1] && (
                    <iframe
                      src={`https://www.youtube.com/embed/${details.media[1]}`}
                      title={details.title}
                    />
                  )}
                  {currentMediaIndex === 2 && details.media[2] && (
                    <img src={details.media[2]} alt={details.title} />
                  )}
                </>
              ) : showVid && details.media[1] ? (
                <iframe
                  src={`https://www.youtube.com/embed/${details.media[1]}`}
                  title={details.title}
                />
              ) : details.media[showImg ? 0 : 2] ? (
                <img
                  src={showImg ? details.media[0] : details.media[2]}
                  alt={details.title}
                />
              ) : null}
            </div>
          </div>
          {!isSmallScreen && details.media.length > 0 && (
            <div className="sdImgRow">
              {details.media[0] && (
                <div className="sdImgWrapper">
                  <img
                    src={details.media[0]}
                    onClick={() => {
                      setShowImg(true);
                      setShowVid(false);
                    }}
                    alt="Thumbnail 1"
                  />
                </div>
              )}
              {details.media[2] && (
                <div className="sdImgWrapper">
                  <img
                    src={details.media[2]}
                    onClick={() => {
                      setShowVid(false);
                      setShowImg(false);
                    }}
                    alt="Thumbnail 2"
                  />
                </div>
              )}
              {details.media[1] && (
                <div className="sdImgWrapper">
                  <img
                    src={details.media[0]}
                    onClick={() => {
                      setShowVid(true);
                      setShowImg(false);
                    }}
                    alt="Thumbnail Video"
                  />
                </div>
              )}
            </div>
          )}
          {isSmallScreen && (
            <div className="detailplanInd">
              {details.media.map((_, index) => (
                <span
                  key={index}
                  className={currentMediaIndex === index ? "" : "detailnormInd"}
                >
                  <FaCircle />
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="sdBrief">
          <div className="sdTitle">
            <h1>{details.title}</h1>
          </div>
          {details.target && (
            <div className="sdTarget">
              <p>- {details.target}</p>
            </div>
          )}
          <div className="sdPrice">
            <span className="sdMrp">₹{details.mrp}</span>
            <span className="sdDiscountPrice">₹{details.price}</span>
          </div>
          <div className="sdBuyButton">
            <Link to="#">Buy Now</Link>
          </div>
          <div className="sdIncludes">
            <div className="sdIncludesHead">What's Included?</div>
            <div className="sdIncludedList">
              {details.services.map((service, index) => (
                <li key={index}>{service.name}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sdFoot">
        <div className="sdSecWrap">
          {details.desc && (
            <div className="sdDesc">
              <p>{details.desc}</p>
            </div>
          )}
          <div className="sdServices">
            <div className="sdServciseHead">
              <p>This plan includes :</p>
            </div>
            <div className="sdServiceDesc">
              {details.services.map((service, index) => (
                <div key={index} className="sdService">
                  <div
                    className="sdServiceHeader"
                    onClick={() => toggleDescription(index)}
                  >
                    <p className="sdServiceName">{service.name}</p>
                    <span className="sdServiceArrow">
                      {activeIndex === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="sdServiceInfo">
                      <p>{service.include}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperPlanDetails;
