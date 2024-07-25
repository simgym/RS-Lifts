import TransformationSlider from "./TransformationSlider";
import "./NinetyTransformation.css";

const NinetyTransformation = () => {
  return (
    <div className="tfSectionWrapper">
      <div className="tfSectionCont">
        <span className="tfSecHead">
          <h2>
            <span style={{ color: "rgba(0, 0, 0, 0.785)" }}>90 DAYS</span> BODY
            TRANSFORMATION PROGRAM
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
          <button>Check Now</button>
        </span>
      </div>
      <div className="tfSectionImg">
        <TransformationSlider />
      </div>
    </div>
  );
};

export default NinetyTransformation;
