import TransformationSlider from "./TransformationSlider";
import { Link } from "react-router-dom";
import "./NinetyTransformation.css";

const NinetyTransformation = () => {
  return (
    <div className="tfSectionWrapper">
      {/* <div className="tfDisc">
        <p>60% OFF</p>
      </div> */}
      <div className="tfSectionCont">
        <span className="tfSecHead">
          <h2>
            <span>90 DAYS</span> ONLINE TRANSFORMATION PROGRAM
          </h2>
        </span>
        <span className="tfSecQuote">
          <p>
            Join our 90 Days Body Transformation Program and achieve your
            fitness goals with personalized online coaching by Rohit Sharma.
            This program offers custom exercise plans and tailored nutrition
            guidance to help you reduce fat, build muscle, and improve posture
            and metabolism. Experience continuous support and motivation to stay
            on track and transform your body and health. Start your journey
            today and unlock your full potential!
          </p>
        </span>

        <span className="tfSecButton">
          <Link to="/home/plan/90+day+online+transformation+program">
            Check Now
          </Link>
        </span>
      </div>

      <div className="tfSectionImg">
        <TransformationSlider />
      </div>
    </div>
  );
};

export default NinetyTransformation;
