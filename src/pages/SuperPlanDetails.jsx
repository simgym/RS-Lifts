import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./SuperPlanDetails.css";

const SuperPlanDetails = ({ details }) => {
  const mediaList = [{}];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sdWrap">
      <div className="sdHead">
        <div className="sdImg">
          <img src={details.poster} alt={details.title} />
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
