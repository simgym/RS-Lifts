import landingImg from "../assets/first.jpg";

import "./LandingSection.css";

const LandingSection = () => {
  return (
    <div className="landpageWrapper">
      <div className="lsWrapper">
        <div className="lsCont">
          <div className="dat">
            <div className="movingPill"></div>
            <p>
              <span>DETERMINATION</span>.<span>ACTION</span>.
              <span>TRANSFORMATION</span>
            </p>
          </div>
          <div className="lsQuote">
            <p>
              <span className="lsShape">SHAPE</span> YOUR
            </p>
            <p>IDEAL BODY</p>
          </div>
          <div className="lsMission">
            <p>
              Achieve natural fitness and health through expert guidance. Make
              fitness a part of everyday life for a happy, healthy lifestyle.
              Focus on holistic well-being to live with energy, confidence, and
              longevity. Simple knowledge for a better life.
            </p>
          </div>
        </div>
        <div className="lsImg">
          <img src={landingImg} alt="Landing Image" />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
