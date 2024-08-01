import { Link } from "react-router-dom";
import "./SuperPlanDetails.css";

const SuperPlanDetails = ({ details }) => {
  return (
    <div className="sdWrap">
      {/* <h1>{details.title}</h1> */}
      <div className="sdHead">
        {/* <div className="rand"> */}
        <div className="sdImg">
          <img src={details.poster} />
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
            <Link>Buy Now</Link>
          </div>
          <div className="sdIncludes">
            <div className="sdIncludesHead">What's Included?</div>
            <div className="sdIncludedList">
              {details.services.map((service, index) => (
                <li key={index}>{service.name}</li>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="sdFoot">
        <div className="rand">
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
              {" "}
              {details.services.map((service, index) => (
                <div key={index} className="sdService">
                  <p className="sdServiceName">{service.name} :</p>
                  <p className="sdServiceInfo">{service.include}</p>
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
